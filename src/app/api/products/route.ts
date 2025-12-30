import { dbConnect } from "@/src/lib/dbConect";
import { Product } from "@/src/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const products = await Product.find({ web: true });
    console.log(products);
    return NextResponse.json({
      ok: true,
      products,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      ok: false,
      message: "Error al obtener los productos",
    });
  }
}
