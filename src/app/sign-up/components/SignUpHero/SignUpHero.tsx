'use client';

import { RegistrationForm } from '@/features/account';
import { AuthPageShell } from '@/features/account/ui/AuthPageShell/AuthPageShell';

export const SignUpHero = () => {
  return (
    <AuthPageShell
      title="Create Your Bizorax Account"
      description="Register to manage your services, monitor progress, and access tailored updates designed to support your business process. An account provides a structured overview of your engagements, along with access to new solutions and ongoing improvements."
    >
      <RegistrationForm />
    </AuthPageShell>
  );
};
