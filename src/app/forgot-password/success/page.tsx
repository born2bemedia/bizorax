"use client";

import { AuthPageNotice } from "@/features/account/ui/AuthPageNotice/AuthPageNotice";
import { AuthPageShell } from "@/features/account/ui/AuthPageShell/AuthPageShell";

export default function ForgotPasswordSuccessPage() {
  return (
    <AuthPageShell
      title="Success!"
      description="Your reset request has been sent. The next step is in your inbox."
    >
      <AuthPageNotice
        description="Check your inbox. We just sent a password reset link. If you can’t find the email, make sure to check your spam or promotions folder."
        primaryCtaLabel="Go to sign in"
        primaryCtaHref="/sign-in"
      />
    </AuthPageShell>
  );
}
