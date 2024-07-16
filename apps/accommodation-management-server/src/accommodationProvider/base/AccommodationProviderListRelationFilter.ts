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
import { AccommodationProviderWhereInput } from "./AccommodationProviderWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AccommodationProviderListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AccommodationProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => AccommodationProviderWhereInput)
  @IsOptional()
  @Field(() => AccommodationProviderWhereInput, {
    nullable: true,
  })
  every?: AccommodationProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccommodationProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => AccommodationProviderWhereInput)
  @IsOptional()
  @Field(() => AccommodationProviderWhereInput, {
    nullable: true,
  })
  some?: AccommodationProviderWhereInput;

  @ApiProperty({
    required: false,
    type: () => AccommodationProviderWhereInput,
  })
  @ValidateNested()
  @Type(() => AccommodationProviderWhereInput)
  @IsOptional()
  @Field(() => AccommodationProviderWhereInput, {
    nullable: true,
  })
  none?: AccommodationProviderWhereInput;
}
export { AccommodationProviderListRelationFilter as AccommodationProviderListRelationFilter };