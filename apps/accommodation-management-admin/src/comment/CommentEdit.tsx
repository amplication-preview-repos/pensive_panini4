import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="accommodation" source="accommodation" />
        <TextInput label="student" source="student" />
        <NumberInput
          step={1}
          label="stayDurationMonths"
          source="stayDurationMonths"
        />
      </SimpleForm>
    </Edit>
  );
};
