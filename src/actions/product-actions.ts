import { dbConnect } from "../lib/dbConect";
import { Product, ProductImage } from "../models";

export const getProducts = async (description?: string) => {
  try {
    await dbConnect();
    let products;

    if (!description) {
      products = await Product.find({ web: true }).limit(10).lean();
    } else {
      console.log(description);
      products = await Product.find({
        web: true,
        description: { $regex: description, $options: "i" },
      })
        .limit(10)
        .lean();
    }

    //console.log(products);

    const images = await ProductImage.find().lean();

    //console.log(images);

    return {
      ok: true,
      products,
      msg: "Productos obtenidos correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      products: [],
      msg: "Error al obtener los productos",
    };
  }
};
