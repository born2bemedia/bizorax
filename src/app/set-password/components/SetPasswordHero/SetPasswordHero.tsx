'use client';

import { SetPasswordForm } from '@/features/account/ui/SetPasswordForm/SetPasswordForm';
import { AuthPageShell } from '@/features/account/ui/AuthPageShell/AuthPageShell';

export const SetPasswordHero = ({ token }: { token: string }) => {
  return (
    <AuthPageShell
      title="Set a New Password"
      description="Choose a secure password for your Bizorax account. Once saved, you can sign in with the new password right away."
    >
      <SetPasswordForm token={token} />
    </AuthPageShell>
  );
};
