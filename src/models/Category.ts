import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema({
  codigo: {
    type: Number,
    required: true,
    trim: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  subRubros: {
    type: [],
    default: [],
  },
  web: {
    type: Boolean,
    default: true,
  },
});

export const Category = models.Category || model("Category", CategorySchema);
