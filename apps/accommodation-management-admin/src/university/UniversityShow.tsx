import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { UNIVERSITY_TITLE_FIELD } from "./UniversityTitle";

export const UniversityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Location" source="location" />
        <ReferenceManyField
          reference="Student"
          target="universityId"
          label="Students"
        >
          <Datagrid rowClick="show">
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
            <TextField label="roles" source="roles" />
            <TextField label="permissions" source="permissions" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
