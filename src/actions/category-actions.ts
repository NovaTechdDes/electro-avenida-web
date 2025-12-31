"use server";
import { dbConnect } from "../lib/dbConect";
import { Category } from "../models";

export const getCategory = async () => {
  try {
    await dbConnect();
    const categories = await Category.find().lean();
    return {
      ok: true,
      categories,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      categories: [],
      msg: "No se pudo obtener las categorias",
    };
  }
};
