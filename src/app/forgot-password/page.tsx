import { ForgotPasswordHero } from './components';

export const metadata = {
  title: 'Forgot Password',
  description: 'Forgot Password to your account',
};

export default async function ForgotPassword() {
  return <ForgotPasswordHero />;
}
