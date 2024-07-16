import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AccommodationProviderList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AccommodationProviders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Email" source="email" />
        <TextField label="Password" source="password" />
        <TextField label="RoomType" source="roomType" />
        <TextField label="Location" source="location" />
        <BooleanField
          label="ElectricityIncluded"
          source="electricityIncluded"
        />
        <BooleanField label="WaterIncluded" source="waterIncluded" />
        <TextField label="Price" source="price" />
        <TextField label="Name" source="name" />
        <TextField label="Popularity" source="popularity" />
      </Datagrid>
    </List>
  );
};
