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
import { AccommodationProviderWhereInput } from "./AccommodationProviderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AccommodationProviderOrderByInput } from "./AccommodationProviderOrderByInput";

@ArgsType()
class AccommodationProviderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AccommodationProviderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AccommodationProviderWhereInput, { nullable: true })
  @Type(() => AccommodationProviderWhereInput)
  where?: AccommodationProviderWhereInput;

  @ApiProperty({
    required: false,
    type: [AccommodationProviderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AccommodationProviderOrderByInput], { nullable: true })
  @Type(() => AccommodationProviderOrderByInput)
  orderBy?: Array<AccommodationProviderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AccommodationProviderFindManyArgs as AccommodationProviderFindManyArgs };