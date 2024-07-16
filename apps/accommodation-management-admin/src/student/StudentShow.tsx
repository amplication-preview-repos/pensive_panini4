import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STUDENT_TITLE_FIELD } from "./StudentTitle";
import { UNIVERSITY_TITLE_FIELD } from "../university/UniversityTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Email" source="email" />
        <TextField label="Password" source="password" />
        <ReferenceField
          label="University"
          source="university.id"
          reference="University"
        >
          <TextField source={UNIVERSITY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Location" source="location" />
        <ReferenceManyField
          reference="Recommendation"
          target="studentId"
          label="Recommendations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Title" source="title" />
            <TextField label="Description" source="description" />
            <TextField label="Category" source="category" />
            <TextField label="Location" source="location" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
