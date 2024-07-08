import 'server-only';

import { SessionPayload } from '@/types/auth-definition';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const key = new TextEncoder().encode('secret');

// Encrypt - Signs a JSON Web Token (JWT) with the given payload,
// using HS256 algorithm, setting expiration to 1 day.
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('1day').sign(key);
}

// Decrypt - Verifies the JWT's signature using HS256 algorithm.
// If valid, extracts and returns the payload; otherwise, returns null.
export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

// Creates a session for a user with a given userId,
// stores it in a secure, HTTP-only cookie that expires in 1 hour,
// and redirects to the home page.
export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day from now
  const session = await encrypt({ userId, expiresAt });

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/project/form');
}

// Verifies the current user session by checking the JWT stored in a cookie.
// Redirects to login if the session is invalid or expired, or returns user details if valid.
export async function verifySession() {
  const cookie = cookies().get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/project/form');
  }

  return { isAuth: true, userId: Number(session.userId) };
}

export function deleteSession() {
  cookies().delete('session');
  redirect('/signup');
}
