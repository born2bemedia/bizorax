'use client';

import { ForgotPasswordForm } from '@/features/account/ui/ForgotPasswordForm/ForgotPasswordForm';
import { AuthPageShell } from '@/features/account/ui/AuthPageShell/AuthPageShell';

export const ForgotPasswordHero = () => {
  return (
    <AuthPageShell
      title="Password Recovery"
      description="Enter your username or email address, and we will send you a secure link to create a new password."
    >
      <ForgotPasswordForm />
    </AuthPageShell>
  );
};
