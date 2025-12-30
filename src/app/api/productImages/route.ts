import { dbConnect } from "@/src/lib/dbConect";
import { ProductImage } from "@/src/models";

export const GET = async () => {
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
