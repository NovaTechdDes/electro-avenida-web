import { dbConnect } from "@/src/lib/dbConect";
import { Product } from "@/src/models/Product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const search = searchParams.get("search") || "";

    const query: any = { web: true };

    const skip = (page - 1) * limit;

    console.log(search);

    if (search) {
      query.$text = { $search: search };
    }

    const [products, total] = await Promise.all([
      Product.find(query).skip(skip).limit(limit).lean(),
      Product.countDocuments(query),
    ]);

    return NextResponse.json({
      ok: true,
      products,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      ok: false,
      message: "Error al obtener los productos",
    });
  }
}
