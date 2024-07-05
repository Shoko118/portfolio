'use client';

import { signup } from '@/actions/auth';
import { useFormState } from 'react-dom';

export default function SignupPage() {
  const [state, action, pending] = useFormState(signup, undefined);

  return (
    <form className="space-y-3" action={action}>
      <div>
        <div>Name</div>
        <input name="name" />
      </div>
      {state?.errors?.name && <p className="text-red-400">{state?.errors?.name}</p>}
      <div>
        <div>Email</div>
        <input name="email" />
      </div>
      {state?.errors?.email && <p className="text-red-400">{state?.errors?.email}</p>}
      <div>
        <div>Password</div>
        <input name="password" />
      </div>
      {state?.errors?.password && <p className="text-red-400">{state?.errors?.password}</p>}

      <button disabled={pending}>{pending ? 'Pending...' : 'Sign Up'}</button>
    </form>
  );
}
