'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  type ChangePasswordSchema,
  type ContactDataSchema,
  createChangePasswordSchema,
  createContactDataSchema,
} from '@/features/account/model/account-settings.schema';
import { MyOrdersPage } from '@/features/account/ui/MyOrdersPage/MyOrdersPage';
import { useAuthStore } from '@/features/account/store/auth';

import { refreshLenis } from '@/shared/ui/components';

import styles from './AccountPage.module.scss';

const LogoutArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 18L18 6M18 6H9M18 6V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const EyeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12C3.6 8.4 7.3 6 12 6C16.7 6 20.4 8.4 22 12C20.4 15.6 16.7 18 12 18C7.3 18 3.6 15.6 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
};

const EyeOffIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3L21 21M10.6 10.6C10.2 11 10 11.5 10 12C10 13.1 10.9 14 12 14C12.5 14 13 13.8 13.4 13.4M17.9 17.9C16.2 19.2 14.2 20 12 20C7.3 20 3.6 17.6 2 14C2.8 12.2 4 10.7 5.5 9.5M9.9 4.3C10.6 4.1 11.3 4 12 4C16.7 4 20.4 6.4 22 10C21.3 11.5 20.3 12.8 19 13.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

type PasswordFieldName = keyof Pick<
  ChangePasswordSchema,
  'currentPassword' | 'newPassword' | 'repeatNewPassword'
>;

const IMAGE_TOP = '/images/account/man-near-window.png';
const IMAGE_BOTTOM = '/images/contact/img-01.jpg';
const WRONG_PASSWORD_MESSAGE = 'The wrong password. Try again.';

export const AccountPage = () => {
  const router = useRouter();

  const user = useAuthStore((s) => s.user);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const fetchUser = useAuthStore((s) => s.fetchUser);
  const logout = useAuthStore((s) => s.logout);
  const setUser = useAuthStore((s) => s.setUser);

  const [profileMessage, setProfileMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [passwordMessage, setPasswordMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [showPassword, setShowPassword] = useState<Record<PasswordFieldName, boolean>>({
    currentPassword: false,
    newPassword: false,
    repeatNewPassword: false,
  });

  const profileForm = useForm<ContactDataSchema>({
    resolver: zodResolver(createContactDataSchema()),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      country: '',
      zip: '',
    },
  });

  const passwordForm = useForm<ChangePasswordSchema>({
    resolver: zodResolver(createChangePasswordSchema()),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
    },
  });

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (!isInitialized) return;
    if (!user) {
      router.replace('/sign-in');
    }
  }, [isInitialized, router, user]);

  useEffect(() => {
    if (!user) return;
    profileForm.reset({
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      phone: user.phone ?? '',
      email: user.email ?? '',
      address1: user.address1 ?? '',
      address2: user.address2 ?? '',
      city: user.city ?? '',
      country: user.country ?? '',
      zip: user.zip ?? '',
    });
  }, [profileForm, user]);

  useEffect(() => {
    if (isInitialized && user) {
      refreshLenis();
    }
  }, [isInitialized, user]);

  const userFullName = useMemo(() => {
    if (!user) return 'User Name';
    const fullName = `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim();
    return fullName || user.email || 'User Name';
  }, [user]);

  const togglePasswordVisibility = (fieldName: PasswordFieldName) => {
    setShowPassword((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleLogout = async () => {
    await logout();
    router.push('/sign-in');
  };

  const handleProfileSubmit = async (data: ContactDataSchema) => {
    if (!user) return;
    setProfileMessage(null);

    try {
      const response = await fetch('/api/account/me', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || undefined,
          address1: data.address1 || undefined,
          address2: data.address2 || undefined,
          city: data.city || undefined,
          country: data.country || undefined,
          zip: data.zip || undefined,
        }),
      });

      const json = (await response.json()) as {
        user?: Record<string, unknown>;
        message?: string;
      };

      if (!response.ok || !json.user) {
        setProfileMessage({
          type: 'error',
          text: json.message ?? 'Update failed.',
        });
        return;
      }

      const updatedUser = json.user as {
        email?: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        address1?: string;
        address2?: string;
        city?: string;
        country?: string;
        zip?: string;
      };

      setUser({
        id: user.id,
        email: updatedUser.email ?? data.email,
        firstName: updatedUser.firstName ?? data.firstName,
        lastName: updatedUser.lastName ?? data.lastName,
        phone: updatedUser.phone ?? data.phone,
        address1: updatedUser.address1 ?? data.address1,
        address2: updatedUser.address2 ?? data.address2,
        city: updatedUser.city ?? data.city,
        country: updatedUser.country ?? data.country,
        zip: updatedUser.zip ?? data.zip,
      });

      await fetchUser();
      setProfileMessage({
        type: 'success',
        text: 'Data updated successfully!',
      });
    } catch {
      setProfileMessage({
        type: 'error',
        text: 'Update failed.',
      });
    }
  };

  const handlePasswordSubmit = async (data: ChangePasswordSchema) => {
    setPasswordMessage(null);

    try {
      const response = await fetch('/api/account/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });

      const json = (await response.json()) as { message?: string };

      if (!response.ok) {
        const message = json.message ?? 'Password update failed.';
        setPasswordMessage({
          type: 'error',
          text:
            response.status === 400 &&
            (message.toLowerCase().includes('wrong') ||
              message.toLowerCase().includes('password'))
              ? WRONG_PASSWORD_MESSAGE
              : message,
        });
        return;
      }

      passwordForm.reset({
        currentPassword: '',
        newPassword: '',
        repeatNewPassword: '',
      });
      setPasswordMessage({
        type: 'success',
        text: 'Password updated successfully!',
      });
    } catch {
      setPasswordMessage({
        type: 'error',
        text: 'Password update failed.',
      });
    }
  };

  if (!isInitialized || !user) {
    return (
      <section className={styles.account}>
        <div className={styles.shell}>
          <p className={styles.loadingText}>
            Loading...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.account}>
      <div className={styles.hero}>
        <div className={styles.shell}>
          <div className={styles.hero__inner}>
            <h1 className={styles.hero__title}>
              Welcome, {userFullName}!
            </h1>
            <button type="button" className={styles.logoutButton} onClick={handleLogout}>
              <span>Log out</span>
              <LogoutArrowIcon />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.imageBand}>
        <img src={IMAGE_TOP} alt="" />
      </div>

      <section className={styles.dashboardSection}>
        <h2 className={styles.sectionTitle}>Dashboard</h2>
        <MyOrdersPage />
      </section>

      <div className={styles.imageBand}>
        <img src={IMAGE_BOTTOM} alt="" />
      </div>

      <section className={styles.managementSection}>
        <h2 className={styles.sectionTitle}>Account Management</h2>

        <div className={styles.managementGrid}>
            <form
              className={styles.profileForm}
              onSubmit={profileForm.handleSubmit(handleProfileSubmit)}
            >
              <div className={styles.formColumnHeader}>Personal Information</div>

              <div className={styles.profileGrid}>
                <label className={styles.field}>
                  <input type="text" placeholder="First name" {...profileForm.register('firstName')} />
                  {profileForm.formState.errors.firstName && (
                    <p className={styles.error}>
                      {profileForm.formState.errors.firstName.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Last name" {...profileForm.register('lastName')} />
                  {profileForm.formState.errors.lastName && (
                    <p className={styles.error}>
                      {profileForm.formState.errors.lastName.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Phone number" {...profileForm.register('phone')} />
                  {profileForm.formState.errors.phone && (
                    <p className={styles.error}>{profileForm.formState.errors.phone.message}</p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="email" placeholder="Email" {...profileForm.register('email')} />
                  {profileForm.formState.errors.email && (
                    <p className={styles.error}>{profileForm.formState.errors.email.message}</p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Street Address" {...profileForm.register('address1')} />
                  {profileForm.formState.errors.address1 && (
                    <p className={styles.error}>
                      {profileForm.formState.errors.address1.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Apartment/Suite" {...profileForm.register('address2')} />
                  {profileForm.formState.errors.address2 && (
                    <p className={styles.error}>
                      {profileForm.formState.errors.address2.message}
                    </p>
                  )}
                </label>

              </div>

              <div className={styles.addressRow}>
                <label className={styles.field}>
                  <input type="text" placeholder="City" {...profileForm.register('city')} />
                  {profileForm.formState.errors.city && (
                    <p className={styles.error}>{profileForm.formState.errors.city.message}</p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Country" {...profileForm.register('country')} />
                  {profileForm.formState.errors.country && (
                    <p className={styles.error}>
                      {profileForm.formState.errors.country.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <input type="text" placeholder="Postal Code" {...profileForm.register('zip')} />
                  {profileForm.formState.errors.zip && (
                    <p className={styles.error}>{profileForm.formState.errors.zip.message}</p>
                  )}
                </label>
              </div>

              <div className={styles.profileActions}>
                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={profileForm.formState.isSubmitting}
                >
                  Save profile
                </button>
              </div>

              {profileMessage && (
                <p
                  className={`${styles.message} ${
                    profileMessage.type === 'error'
                      ? styles.message_error
                      : styles.message_success
                  }`}
                >
                  {profileMessage.text}
                </p>
              )}
            </form>

            <form
              className={styles.passwordForm}
              onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
            >
              <div className={styles.formColumnHeader}>Account Access</div>

              <div className={styles.passwordFields}>
                <label className={styles.field}>
                  <div className={styles.passwordInput}>
                    <input
                      type={showPassword.currentPassword ? 'text' : 'password'}
                      placeholder="Current password"
                      {...passwordForm.register('currentPassword')}
                    />
                    <button
                      type="button"
                      className={styles.passwordToggle}
                      onClick={() => togglePasswordVisibility('currentPassword')}
                      aria-label={
                        showPassword.currentPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword.currentPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {passwordForm.formState.errors.currentPassword && (
                    <p className={styles.error}>
                      {passwordForm.formState.errors.currentPassword.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <div className={styles.passwordInput}>
                    <input
                      type={showPassword.newPassword ? 'text' : 'password'}
                      placeholder="New password"
                      {...passwordForm.register('newPassword')}
                    />
                    <button
                      type="button"
                      className={styles.passwordToggle}
                      onClick={() => togglePasswordVisibility('newPassword')}
                      aria-label={showPassword.newPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword.newPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {passwordForm.formState.errors.newPassword && (
                    <p className={styles.error}>
                      {passwordForm.formState.errors.newPassword.message}
                    </p>
                  )}
                </label>

                <label className={styles.field}>
                  <div className={styles.passwordInput}>
                    <input
                      type={showPassword.repeatNewPassword ? 'text' : 'password'}
                      placeholder="Confirm new password"
                      {...passwordForm.register('repeatNewPassword')}
                    />
                    <button
                      type="button"
                      className={styles.passwordToggle}
                      onClick={() => togglePasswordVisibility('repeatNewPassword')}
                      aria-label={
                        showPassword.repeatNewPassword ? 'Hide password' : 'Show password'
                      }
                    >
                      {showPassword.repeatNewPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {passwordForm.formState.errors.repeatNewPassword && (
                    <p className={styles.error}>
                      {passwordForm.formState.errors.repeatNewPassword.message}
                    </p>
                  )}
                </label>
              </div>

              <div className={styles.passwordActions}>
                <button
                  type="submit"
                  className={styles.saveButton}
                  disabled={passwordForm.formState.isSubmitting}
                >
                  Save Changes
                </button>
              </div>

              {passwordMessage && (
                <p
                  className={`${styles.message} ${
                    passwordMessage.type === 'error'
                      ? styles.message_error
                      : styles.message_success
                  }`}
                >
                  {passwordMessage.text}
                </p>
              )}
            </form>
        </div>
      </section>
    </section>
  );
};
