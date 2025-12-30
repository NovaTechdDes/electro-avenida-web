import { dbConnect } from "../lib/dbConect";
import { ProductImage } from "../models";

export const getProductImages = async () => {
  try {
    await dbConnect();
    const images = await ProductImage.find();
    return new Response(JSON.stringify(images));
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error al obtener las imagenes", ok: false }),
      {
        status: 500,
      }
    );
  }
};
