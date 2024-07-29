import reviews from "../../../mocks/reviews/reviews.json";
export type ReviewSchemaType = (typeof reviews)[0];
interface ReviewInterface extends ReviewSchemaType {}
export interface ReviewSchemaInterface extends ReviewInterface {}
