import ReviewModel from "../../database/schemas/reviews";
import { ReviewSchemaType } from "../../database/schemas/reviews/types";
import boom from "@hapi/boom";

class ReviewService {
  public reviews: ReviewSchemaType[] = [];
  constructor() {
    this.findAll();
  }

  async findAll() {
    try {
      const allReviews = await ReviewModel.find();
      this.reviews = allReviews;
      return allReviews;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: string) {
    const reviews = this.reviews;
    const findOneReview = reviews.find(
      (certification) => certification._id.toString() === id
    );
    if (findOneReview) {
      return findOneReview;
    } else {
      throw boom.notFound("the certification not found");
    }
  }
  async create(certification: ReviewSchemaType) {
    try {
      const newReview = new ReviewModel(certification);
      return await newReview.save();
    } catch (e) {
      throw boom.conflict("error in adding certification to database");
    }
  }
  async update(id: string, updateReview: ReviewSchemaType) {
    const reviews = this.reviews;
    const oldReviewIndex = reviews.findIndex(
      (certification: ReviewSchemaType) => certification._id.toString() === id
    );
    const oldReview = reviews[oldReviewIndex];
    const newReview = { oldReview, ...updateReview };

    if (oldReviewIndex !== -1) {
      try {
        return await ReviewModel.updateOne({ _id: id }, newReview);
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this requested update certification does exist");
    }
  }
  async delete(id: string) {
    const reviews = this.reviews;
    const deleteReviewIndex = reviews.findIndex(
      (certification) => certification._id.toString() === id
    );

    if (deleteReviewIndex !== -1) {
      try {
        return await ReviewModel.deleteOne({ _id: id });
      } catch (error) {
        throw error;
      }
    } else {
      throw boom.notFound("this request delete certification does exist");
    }
  }
}

export default new ReviewService();
