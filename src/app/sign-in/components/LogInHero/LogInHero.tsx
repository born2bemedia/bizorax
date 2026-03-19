'use client';

import { LoginForm } from '@/features/account/ui/LoginForm/LoginForm';
import { AuthPageShell } from '@/features/account/ui/AuthPageShell/AuthPageShell';

export const LogInHero = () => {
  return (
    <AuthPageShell
      title="Welcome to Bizorax"
      description="Please enter your username or email address along with your password to access your account. If you require assistance with your password, select “Forgot Password?” to receive reset instructions."
    >
      <LoginForm />
    </AuthPageShell>
  );
};
