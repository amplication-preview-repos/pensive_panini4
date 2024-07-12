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

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="address" source="address" />
        <TextField label="description" source="description" />
        <TextField label="name" source="name" />
        <TextField label="provider" source="provider" />
        <TextField label="propertyPictures" source="propertyPictures" />
        <TextField label="roomPictures" source="roomPictures" />
        <TextField label="accommodationStatus" source="accommodationStatus" />
        <TextField label="roomType" source="roomType" />
        <TextField
          label="accommodationProvider"
          source="accommodationProvider"
        />
        <TextField label="location" source="location" />
        <BooleanField label="waterIncluded" source="waterIncluded" />
        <BooleanField
          label="electricityIncluded"
          source="electricityIncluded"
        />
        <TextField label="wifiAmount" source="wifiAmount" />
        <BooleanField label="wifiIncluded" source="wifiIncluded" />
      </Datagrid>
    </List>
  );
};
