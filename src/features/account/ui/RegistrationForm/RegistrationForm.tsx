'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  createRegistrationSchema,
  type RegistrationSchema,
} from '@/features/account/model/account-settings.schema';
import { useAuthStore } from '@/features/account/store/auth';

import styles from './RegistrationFormSignUp.module.scss';

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

export const RegistrationForm = () => {
  const router = useRouter();
  const register = useAuthStore((s) => s.register);
  const isLoading = useAuthStore((s) => s.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const {
    register: registerField,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(createRegistrationSchema()),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      email: '',
      password: '',
      repeatPassword: '',
      agreement: false,
    },
  });

  const onSubmit = async (data: RegistrationSchema) => {
    const result = await register(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.username ?? '',
      data.phone ?? '',
      data.agreement
    );

    if (result.ok) {
      router.push('/sign-up/success');
      return;
    }

    if (result.message?.toLowerCase().includes('email')) {
      setError('email', { message: result.message });
      return;
    }

    setError('root', { message: result.message ?? 'Registration failed.' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.registration_form} noValidate>
      <div className={styles.registration_form__inputs}>
        <div
          className={`${styles.registration_form__field} ${
            errors.firstName ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="firstName" className={styles.registration_form__sr_only}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            {...registerField('firstName')}
            autoComplete="given-name"
            placeholder="First name"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <span className={styles.registration_form__error}>{errors.firstName.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${
            errors.lastName ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="lastName" className={styles.registration_form__sr_only}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            {...registerField('lastName')}
            autoComplete="family-name"
            placeholder="Last name"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <span className={styles.registration_form__error}>{errors.lastName.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${styles.registration_form__field_full} ${
            errors.username ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="username" className={styles.registration_form__sr_only}>
            Username
          </label>
          <input
            id="username"
            type="text"
            {...registerField('username')}
            autoComplete="username"
            placeholder="Username"
            aria-invalid={!!errors.username}
          />
          {errors.username && (
            <span className={styles.registration_form__error}>{errors.username.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${
            errors.phone ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="phone" className={styles.registration_form__sr_only}>
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            {...registerField('phone')}
            autoComplete="tel"
            placeholder="Phone number"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <span className={styles.registration_form__error}>{errors.phone.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${
            errors.email ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="email" className={styles.registration_form__sr_only}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...registerField('email')}
            autoComplete="email"
            placeholder="Email"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className={styles.registration_form__error}>{errors.email.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${
            errors.password ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="password" className={styles.registration_form__sr_only}>
            Password
          </label>
          <div className={styles.registration_form__password_wrap}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...registerField('password')}
              autoComplete="new-password"
              placeholder="Password"
              aria-invalid={!!errors.password}
            />
            <button
              type="button"
              className={styles.registration_form__toggle}
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon />
            </button>
          </div>
          {errors.password && (
            <span className={styles.registration_form__error}>{errors.password.message}</span>
          )}
        </div>

        <div
          className={`${styles.registration_form__field} ${
            errors.repeatPassword ? styles.registration_form__field_error : ''
          }`}
        >
          <label htmlFor="repeatPassword" className={styles.registration_form__sr_only}>
            Repeat password
          </label>
          <div className={styles.registration_form__password_wrap}>
            <input
              id="repeatPassword"
              type={showRepeatPassword ? 'text' : 'password'}
              {...registerField('repeatPassword')}
              autoComplete="new-password"
              placeholder="Repeat password"
              aria-invalid={!!errors.repeatPassword}
            />
            <button
              type="button"
              className={styles.registration_form__toggle}
              onClick={() => setShowRepeatPassword((value) => !value)}
              aria-label={showRepeatPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon />
            </button>
          </div>
          {errors.repeatPassword && (
            <span className={styles.registration_form__error}>{errors.repeatPassword.message}</span>
          )}
        </div>
      </div>

      <label className={styles.registration_form__agreement}>
        <input type="checkbox" {...registerField('agreement')} />
        <span>
          By creating an account, you confirm that you are at least 18 years of age and accept our{' '}
          <Link href="/terms-and-conditions">
            Terms and Conditions
          </Link>
          {' and '}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </span>
      </label>
      {errors.agreement && (
        <span className={styles.registration_form__error}>{errors.agreement.message}</span>
      )}

      {errors.root && (
        <span className={styles.registration_form__root_error}>{errors.root.message}</span>
      )}

      <button type="submit" className={styles.registration_form__submit} disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Create account'}
      </button>
    </form>
  );
};
