import { redirect } from 'next/navigation';

import { SetPasswordHero } from './components';

export const metadata = {
  title: 'Set Password',
  description: 'Set a new password for your account',
};

export default async function SetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const awaitedSearchParams = await searchParams;
  const tokenParam = awaitedSearchParams.token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;

  if (!token) {
    redirect('/forgot-password');
  }

  return <SetPasswordHero token={token} />;
}



