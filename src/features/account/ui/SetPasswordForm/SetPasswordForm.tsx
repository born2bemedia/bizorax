'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAuthStore } from '@/features/account/store/auth';

import styles from './SetPasswordFormDesign.module.scss';

const setPasswordSchema = z
  .object({
    newPassword: z.string().min(1, 'New password is required'),
    repeatNewPassword: z.string().min(1, 'Please repeat your new password'),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    path: ['repeatNewPassword'],
    message: 'Passwords do not match.',
  });

type SetPasswordFormSchema = z.infer<typeof setPasswordSchema>;

const EyeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 5C16.5 5 20.27 7.94 21.54 12C20.27 16.06 16.5 19 12 19C7.5 19 3.73 16.06 2.46 12C3.73 7.94 7.5 5 12 5ZM12 7C8.74 7 5.84 9.11 4.59 12C5.84 14.89 8.74 17 12 17C15.26 17 18.16 14.89 19.41 12C18.16 9.11 15.26 7 12 7ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5Z"
        fill="#232323"
      />
    </svg>
  );
};

export const SetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const resetPassword = useAuthStore((s) => s.resetPassword);
  const isLoading = useAuthStore((s) => s.isLoading);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SetPasswordFormSchema>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: { newPassword: '', repeatNewPassword: '' },
  });

  const onSubmit = async (data: SetPasswordFormSchema) => {
    const result = await resetPassword(token, data.newPassword);

    if (result.ok) {
      router.push('/set-password/success');
      return;
    }

    setError('root', { message: result.message ?? 'Reset password failed.' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.set_password_form} noValidate>
      <div className={styles.set_password_form__inputs}>
        <div
          className={`${styles.set_password_form__field} ${
            errors.newPassword ? styles.set_password_form__field_error : ''
          }`}
        >
          <label htmlFor="newPassword" className={styles.set_password_form__sr_only}>
            New password
          </label>
          <div className={styles.set_password_form__password_wrap}>
            <input
              id="newPassword"
              type={showNewPassword ? 'text' : 'password'}
              {...register('newPassword')}
              autoComplete="new-password"
              placeholder="New password"
              aria-invalid={!!errors.newPassword}
            />
            <button
              type="button"
              className={styles.set_password_form__toggle}
              onClick={() => setShowNewPassword((value) => !value)}
              aria-label={showNewPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon />
            </button>
          </div>
          {errors.newPassword && (
            <span className={styles.set_password_form__error}>{errors.newPassword.message}</span>
          )}
        </div>

        <div
          className={`${styles.set_password_form__field} ${
            errors.repeatNewPassword ? styles.set_password_form__field_error : ''
          }`}
        >
          <label htmlFor="repeatNewPassword" className={styles.set_password_form__sr_only}>
            Confirm new password
          </label>
          <div className={styles.set_password_form__password_wrap}>
            <input
              id="repeatNewPassword"
              type={showRepeatPassword ? 'text' : 'password'}
              {...register('repeatNewPassword')}
              autoComplete="new-password"
              placeholder="Confirm new password"
              aria-invalid={!!errors.repeatNewPassword}
            />
            <button
              type="button"
              className={styles.set_password_form__toggle}
              onClick={() => setShowRepeatPassword((value) => !value)}
              aria-label={showRepeatPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon />
            </button>
          </div>
          {errors.repeatNewPassword && (
            <span className={styles.set_password_form__error}>
              {errors.repeatNewPassword.message}
            </span>
          )}
        </div>
      </div>

      {errors.root && (
        <span className={styles.set_password_form__root_error}>{errors.root.message}</span>
      )}

      <button type="submit" className={styles.set_password_form__submit} disabled={isLoading}>
        {isLoading ? 'Saving password...' : 'Save password'}
      </button>
    </form>
  );
};
