import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  oferta: {
    type: Boolean,
    default: false,
  },
  precioOferta: {
    type: Number,
    default: 0,
  },
  datos: {
    type: Array,
    default: [],
  },
  rubro: {
    type: String,
    required: true,
    trim: true,
  },
  subRubro: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Product = models.Product || model("Product", productSchema);
