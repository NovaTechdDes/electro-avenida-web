import { dbConnect } from '@/src/lib/dbConect';
import { Category } from '@/src/models';
import { Product } from '@/src/models/Product';
import { NextResponse } from 'next/server';

interface Query {
  web?: boolean;
  $text?: { $search: string };
  rubro?: string;
}

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const categoryId = await Category.findOne({ nombre: category }).select('codigo');

    const query: Query = { web: true };

    const skip = (page - 1) * limit;

    if (search) {
      query.$text = { $search: search };
    }

    if (categoryId) {
      query.rubro = categoryId.codigo;
    }

    const [products, total] = await Promise.all([Product.find(query).skip(skip).limit(limit).lean(), Product.countDocuments(query)]);

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
      message: 'Error al obtener los productos',
    });
  }
}
