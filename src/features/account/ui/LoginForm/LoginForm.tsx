'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuthStore } from '@/features/account/store/auth';

import styles from './LoginFormSignIn.module.scss';

const loginSchema = z.object({
  email: z.string().min(1, 'Please enter username or email'),
  password: z.string().min(1, 'Please enter your password'),
});

type LoginFormSchema = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const isLoading = useAuthStore((s) => s.isLoading);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginFormSchema) => {
    const result = await login(data.email, data.password, false);
    if (result.ok) {
      router.push('/account');
      return;
    }

    setError('root', { message: result.message ?? 'Login failed.' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form} noValidate>
      <div className={styles.login_form__inputs}>
        <div
          className={`${styles.login_form__field} ${errors.email ? styles.login_form__field_error : ''}`}
        >
          <label htmlFor="email" className={styles.login_form__sr_only}>
            Username or email
          </label>
          <input
            id="email"
            type="text"
            {...register('email')}
            autoComplete="email"
            placeholder="Username or email"
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className={styles.login_form__error}>{errors.email.message}</span>}
        </div>

        <div
          className={`${styles.login_form__field} ${errors.password ? styles.login_form__field_error : ''}`}
        >
          <label htmlFor="password" className={styles.login_form__sr_only}>
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            autoComplete="current-password"
            placeholder="Password"
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <span className={styles.login_form__error}>{errors.password.message}</span>
          )}
        </div>
      </div>

      {errors.root && <span className={styles.login_form__root_error}>{errors.root.message}</span>}

      <div className={styles.login_form__actions}>
        <button type="submit" className={styles.login_form__submit} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>

        <Link href="/forgot-password" className={styles.login_form__forgot_link}>
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};
