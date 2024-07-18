import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="messages" multiline source="messages" />
        <DateTimeInput label="chatCreatedAt" source="chatCreatedAt" />
        <DateTimeInput
          label="ChatCreatedAtTimestamp"
          source="chatCreatedAtTimestamp"
        />
        <TextInput label="ChatMessages" multiline source="chatMessages" />
      </SimpleForm>
    </Create>
  );
};
