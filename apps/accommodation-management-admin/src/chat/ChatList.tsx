import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Chats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="messages" source="messages" />
        <TextField label="chatCreatedAt" source="chatCreatedAt" />
        <TextField
          label="ChatCreatedAtTimestamp"
          source="chatCreatedAtTimestamp"
        />
        <TextField label="ChatMessages" source="chatMessages" />
      </Datagrid>
    </List>
  );
};
