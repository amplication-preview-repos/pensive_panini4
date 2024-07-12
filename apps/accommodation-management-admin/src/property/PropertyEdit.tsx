import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const PropertyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="provider" source="provider" />
        <ReferenceArrayInput
          source="rooms"
          reference="Room"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <SelectInput
          source="accommodationStatus"
          label="accommodationStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="roomType"
          label="roomType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput
          label="accommodationProvider"
          source="accommodationProvider"
        />
        <TextInput label="location" source="location" />
        <BooleanInput label="waterIncluded" source="waterIncluded" />
        <BooleanInput
          label="electricityIncluded"
          source="electricityIncluded"
        />
        <NumberInput label="wifiAmount" source="wifiAmount" />
        <BooleanInput label="wifiIncluded" source="wifiIncluded" />
      </SimpleForm>
    </Edit>
  );
};
