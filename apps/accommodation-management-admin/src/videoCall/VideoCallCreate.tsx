import * as React from "react";
import { Create, SimpleForm, CreateProps, DateTimeInput } from "react-admin";

export const VideoCallCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="callEnd" source="callEnd" />
        <DateTimeInput label="callStart" source="callStart" />
      </SimpleForm>
    </Create>
  );
};
