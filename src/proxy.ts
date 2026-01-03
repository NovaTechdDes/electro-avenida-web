'use server';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const token = req.cookies.get('auth')?.value;
  const { pathname } = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  console.log(token);
  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    if (id && pathname === '/auth/login') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/:path*'],
};
