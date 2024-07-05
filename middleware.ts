import { type NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decrypt } from './lib/session';

// 1. Specify protected and public routes
const protectedRoutes = ['/project/form'];
const publicRoutes = ['/project/signup', '/project/swr', '/project/zustand'];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  // 4. Define redirection conditions
  const isUnauthProtected = isProtectedRoute && !session?.userId;
  const isAuthPublicRedirect = isPublicRoute && session?.userId && !path.startsWith('/project/form');

  // 5. Redirect based on conditions
  if (isUnauthProtected) {
    return NextResponse.redirect(new URL('/project/signup', req.nextUrl));
  }

  if (isAuthPublicRedirect) {
    return NextResponse.redirect(new URL('/project/form', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
