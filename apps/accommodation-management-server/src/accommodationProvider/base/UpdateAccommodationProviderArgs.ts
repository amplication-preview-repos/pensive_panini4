/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AccommodationProviderWhereUniqueInput } from "./AccommodationProviderWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AccommodationProviderUpdateInput } from "./AccommodationProviderUpdateInput";

@ArgsType()
class UpdateAccommodationProviderArgs {
  @ApiProperty({
    required: true,
    type: () => AccommodationProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccommodationProviderWhereUniqueInput)
  @Field(() => AccommodationProviderWhereUniqueInput, { nullable: false })
  where!: AccommodationProviderWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AccommodationProviderUpdateInput,
  })
  @ValidateNested()
  @Type(() => AccommodationProviderUpdateInput)
  @Field(() => AccommodationProviderUpdateInput, { nullable: false })
  data!: AccommodationProviderUpdateInput;
}

export { UpdateAccommodationProviderArgs as UpdateAccommodationProviderArgs };