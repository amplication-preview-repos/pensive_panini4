import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const AccommodationProviderEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
      </SimpleForm>
    </Edit>
  );
};