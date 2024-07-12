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
  ValidateNested,
  IsEnum,
  IsBoolean,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { RoomUpdateManyWithoutPropertiesInput } from "./RoomUpdateManyWithoutPropertiesInput";
import { Type } from "class-transformer";
import { ReviewUpdateManyWithoutPropertiesInput } from "./ReviewUpdateManyWithoutPropertiesInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumPropertyAccommodationStatus } from "./EnumPropertyAccommodationStatus";
import { EnumPropertyRoomType } from "./EnumPropertyRoomType";

@InputType()
class PropertyUpdateInput {
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
  address?: string | null;

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
  description?: string | null;

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
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  provider?: string | null;

  @ApiProperty({
    required: false,
    type: () => RoomUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => RoomUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => RoomUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  rooms?: RoomUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: () => ReviewUpdateManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => ReviewUpdateManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => ReviewUpdateManyWithoutPropertiesInput, {
    nullable: true,
  })
  reviews?: ReviewUpdateManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  propertyPictures?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roomPictures?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumPropertyAccommodationStatus,
  })
  @IsEnum(EnumPropertyAccommodationStatus)
  @IsOptional()
  @Field(() => EnumPropertyAccommodationStatus, {
    nullable: true,
  })
  accommodationStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyRoomType,
  })
  @IsEnum(EnumPropertyRoomType)
  @IsOptional()
  @Field(() => EnumPropertyRoomType, {
    nullable: true,
  })
  roomType?: "Option1" | null;

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
  accommodationProvider?: string | null;

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
  location?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  waterIncluded?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  electricityIncluded?: boolean | null;

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
  wifiAmount?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  wifiIncluded?: boolean | null;
}

export { PropertyUpdateInput as PropertyUpdateInput };
