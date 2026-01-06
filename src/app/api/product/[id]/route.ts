import { dbConnect } from '@/src/lib/dbConect';
import { Product } from '@/src/models';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }): Promise<Response> {
  try {
    await dbConnect();
    const { id } = await params;

    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json({
        ok: false,
        message: 'Producto no encontrado',
      });
    }

    return NextResponse.json({
      ok: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      message: 'Error al obtener el producto',
    });
  }
}
