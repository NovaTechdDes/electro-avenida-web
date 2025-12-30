import { dbConnect } from "@/src/lib/dbConect";
import { Category } from "@/src/models";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const categories = await Category.find();
    console.log(categories);
    return NextResponse.json({
      ok: true,
      categories,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      message: "Error al obtener las categorías",
    });
  }
}
