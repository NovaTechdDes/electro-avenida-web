'use server';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(req: NextRequest) {
  const token = req.cookies.get('auth')?.value;
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname.startsWith('/auth')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/auth/login', req.nextUrl.origin));
  }
  try {
    const session = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    if (session && pathname === '/auth/login') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    return NextResponse.next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      const res = NextResponse.next();
      res.cookies.delete('auth');
      return res;
    }
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

export const config = {
  matcher: ['/auth/:path*', '/admin/:path*'],
};
