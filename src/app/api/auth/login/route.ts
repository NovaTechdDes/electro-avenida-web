import { dbConnect } from '@/src/lib/dbConect';
import { User } from '@/src/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ ok: false, error: 'Usuario no encontrado' }, { status: 404 });
    }

    /*const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return Response.json({ ok: false, error: 'Contraseña incorrecta' }, { status: 401 });
    }
      */

    const token = jwt.sign({ id: user._id, rol: user.rol }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    const res = NextResponse.json({ ok: true, token });

    res.cookies.set('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 1000,
    });

    return res;
  } catch (error) {
    console.log(error);
    return Response.json({ ok: false, error: 'Error al iniciar sesión' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  return Response.json({ ok: true });
}
