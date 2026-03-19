'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuthStore } from '@/features/account/store/auth';

import styles from './ForgotPasswordFormDesign.module.scss';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Please enter username or email'),
});

type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const router = useRouter();
  const forgotPassword = useAuthStore((s) => s.forgotPassword);
  const isLoading = useAuthStore((s) => s.isLoading);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotPasswordFormSchema) => {
    const result = await forgotPassword(data.email);
    if (result.ok) {
      router.push('/forgot-password/success');
      return;
    }

    setError('root', {
      message: result.message ?? 'Forgot password failed.',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.forgot_password_form} noValidate>
      <div className={styles.forgot_password_form__inputs}>
        <div
          className={`${styles.forgot_password_form__field} ${
            errors.email ? styles.forgot_password_form__field_error : ''
          }`}
        >
          <label htmlFor="email" className={styles.forgot_password_form__sr_only}>
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
          {errors.email && (
            <span className={styles.forgot_password_form__error}>{errors.email.message}</span>
          )}
        </div>
      </div>

      {errors.root && (
        <span className={styles.forgot_password_form__root_error}>{errors.root.message}</span>
      )}

      <button type="submit" className={styles.forgot_password_form__submit} disabled={isLoading}>
        {isLoading ? 'Resetting password...' : 'Request Reset Link'}
      </button>
    </form>
  );
};
