/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";

import { EnumRoomTypeField } from "./EnumRoomTypeField";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";
import { Type } from "class-transformer";
import { AppointmentCreateNestedManyWithoutRoomsInput } from "./AppointmentCreateNestedManyWithoutRoomsInput";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRoomTypeField,
  })
  @IsEnum(EnumRoomTypeField)
  @IsOptional()
  @Field(() => EnumRoomTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => PropertyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PropertyWhereUniqueInput)
  @IsOptional()
  @Field(() => PropertyWhereUniqueInput, {
    nullable: true,
  })
  property?: PropertyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutRoomsInput;
}

export { RoomCreateInput as RoomCreateInput };
