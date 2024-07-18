import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="messages" multiline source="messages" />
        <DateTimeInput label="chatCreatedAt" source="chatCreatedAt" />
        <DateTimeInput
          label="ChatCreatedAtTimestamp"
          source="chatCreatedAtTimestamp"
        />
        <TextInput label="ChatMessages" multiline source="chatMessages" />
      </SimpleForm>
    </Edit>
  );
};
