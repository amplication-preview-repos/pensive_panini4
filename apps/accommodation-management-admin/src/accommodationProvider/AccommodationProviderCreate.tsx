import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
  SelectArrayInput,
} from "react-admin";

export const AccommodationProviderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Password" source="password" />
        <SelectInput
          source="roomType"
          label="RoomType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Location" source="location" />
        <BooleanInput
          label="ElectricityIncluded"
          source="electricityIncluded"
        />
        <BooleanInput label="WaterIncluded" source="waterIncluded" />
        <NumberInput step={1} label="Price" source="price" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Popularity" source="popularity" />
        <SelectArrayInput
          label="roles"
          source="roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <SelectArrayInput
          label="permissions"
          source="permissions"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
