/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Review } from "./Review";
import { ReviewCountArgs } from "./ReviewCountArgs";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewFindUniqueArgs } from "./ReviewFindUniqueArgs";
import { CreateReviewArgs } from "./CreateReviewArgs";
import { UpdateReviewArgs } from "./UpdateReviewArgs";
import { DeleteReviewArgs } from "./DeleteReviewArgs";
import { Property } from "../../property/base/Property";
import { ReviewService } from "../review.service";
@graphql.Resolver(() => Review)
export class ReviewResolverBase {
  constructor(protected readonly service: ReviewService) {}

  async _reviewsMeta(
    @graphql.Args() args: ReviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Review])
  async reviews(@graphql.Args() args: ReviewFindManyArgs): Promise<Review[]> {
    return this.service.reviews(args);
  }

  @graphql.Query(() => Review, { nullable: true })
  async review(
    @graphql.Args() args: ReviewFindUniqueArgs
  ): Promise<Review | null> {
    const result = await this.service.review(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Review)
  async createReview(@graphql.Args() args: CreateReviewArgs): Promise<Review> {
    return await this.service.createReview({
      ...args,
      data: {
        ...args.data,

        property: args.data.property
          ? {
              connect: args.data.property,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Review)
  async updateReview(
    @graphql.Args() args: UpdateReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.updateReview({
        ...args,
        data: {
          ...args.data,

          property: args.data.property
            ? {
                connect: args.data.property,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Review)
  async deleteReview(
    @graphql.Args() args: DeleteReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.deleteReview(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Property, {
    nullable: true,
    name: "property",
  })
  async getProperty(
    @graphql.Parent() parent: Review
  ): Promise<Property | null> {
    const result = await this.service.getProperty(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
