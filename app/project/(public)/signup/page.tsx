'use client';

import { signup } from '@/actions/auth';
import { Card, CardContent, CardFooter, CardHeader } from '@/packages/card';
import { useFormState, useFormStatus } from 'react-dom';

export default function SignupPage() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form className="space-y-3" action={action}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardHeader.Title>Sign Up</CardHeader.Title>
          <CardHeader.Description>It's builded hardcoded frontend feel free to playaround</CardHeader.Description>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <div>Name</div>
            <input name="name" />
          </div>
          {state?.errors?.name && <p className="text-red-400 mt-2">{state?.errors?.name}</p>}
          <div>
            <div>Email</div>
            <input name="email" />
          </div>
          {state?.errors?.email && <p className="text-red-400 mt-2">{state?.errors?.email}</p>}
          <div>
            <div>Password</div>
            <input name="password" />
          </div>
          {state?.errors?.password && <p className="text-red-400 mt-2">{state?.errors?.password}</p>}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}

function SubmitButton() {
  const status = useFormStatus();
  return <button disabled={status.pending}>{status.pending ? 'Pending...' : 'Sign Up'}</button>;
}
