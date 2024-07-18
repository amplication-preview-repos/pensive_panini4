import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AccommodationProviderShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="roles" source="roles" />
        <TextField label="permissions" source="permissions" />
      </SimpleShowLayout>
    </Show>
  );
};
