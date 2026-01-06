import { dbConnect } from '@/src/lib/dbConect';
import { Category } from '@/src/models';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    await dbConnect();
    const categories = await Category.find().lean();
    const safeCategories = categories.map((category) => ({
      ...category,
      _id: category._id.toString(),
    }));
    console.log(safeCategories);
    return NextResponse.json({
      ok: true,
      safeCategories,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      message: 'Error al obtener las categorías',
    });
  }
}
