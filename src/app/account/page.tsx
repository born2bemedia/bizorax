import { AccountPage } from '@/features/account';

export const metadata = {
  title: 'Account',
  description: 'Your account',
};

export default async function Account() {
  return (
    <div>
      <AccountPage />
    </div>
  );
}
