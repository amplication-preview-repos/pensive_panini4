import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UniversityTitle } from "../university/UniversityTitle";
import { RecommendationTitle } from "../recommendation/RecommendationTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <ReferenceInput
          source="university.id"
          reference="University"
          label="University"
        >
          <SelectInput optionText={UniversityTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="location" />
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
