'use client';

import { AuthPageNotice } from '@/features/account/ui/AuthPageNotice/AuthPageNotice';
import { AuthPageShell } from '@/features/account/ui/AuthPageShell/AuthPageShell';

export default function SetPasswordSuccessPage() {
  return (
    <AuthPageShell
      title="Password Updated"
      description="Your Bizorax account is ready to use with the new password."
    >
      <AuthPageNotice
        description="Your password has been changed successfully. You can now sign in with your new password."
        primaryCtaLabel="Go to sign in"
        primaryCtaHref="/sign-in"
      />
    </AuthPageShell>
  );
}
