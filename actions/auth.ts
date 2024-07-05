'use server';

import { createSession } from '@/lib/session';
import { FormState, SignupFormSchema } from '@/types/auth-definition';
import bcrypt from 'bcrypt';

let userDatabase: Record<string, string> = {};

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Generate a unique user ID
  const userId = `user_${Date.now()}`;

  // 2. Prepare data for insertion into "database"
  const { email, name, password } = validatedFields.data;

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Store the user data in "userDatabase"
  const userData = { id: userId, email, name, password: hashedPassword };
  userDatabase = userData;

  // Create a session for the new user
  await createSession(userDatabase.id);
}
