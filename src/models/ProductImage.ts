import { model, models, Schema } from "mongoose";

const ProductImageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

export const ProductImage =
  models.ProductImage || model("ProductImage", ProductImageSchema);
