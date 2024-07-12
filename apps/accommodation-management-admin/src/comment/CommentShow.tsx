import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { POST_TITLE_FIELD } from "../post/PostTitle";

export const CommentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="author" source="author" />
        <ReferenceField label="post" source="post.id" reference="Post">
          <TextField source={POST_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="isActive" source="isActive" />
        <TextField label="accommodation" source="accommodation" />
        <TextField label="student" source="student" />
        <TextField label="stayDurationMonths" source="stayDurationMonths" />
      </SimpleShowLayout>
    </Show>
  );
};
