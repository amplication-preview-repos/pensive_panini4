import * as React from "react";
import { Edit, SimpleForm, EditProps, DateTimeInput } from "react-admin";

export const VideoCallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="callEnd" source="callEnd" />
        <DateTimeInput label="callStart" source="callStart" />
      </SimpleForm>
    </Edit>
  );
};
