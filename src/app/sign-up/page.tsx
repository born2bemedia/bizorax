import { SignUpHero } from './components';

export const metadata = {
  title: 'Sign Up',
  description: 'Sign Up to your account',
};

export default async function SignUpPage() {
  return (
    <>
      <SignUpHero />
    </>
  );
}
