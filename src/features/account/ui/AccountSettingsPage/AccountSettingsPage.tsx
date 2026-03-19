"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/features/account/store/auth";

import { Button } from "@/shared/ui/kit/button/Button";

import styles from "./AccountSettingsPage.module.scss";
import { ChangePasswordForm } from "./ChangePasswordForm/ChangePasswordForm";
import { ContactDataForm } from "./ContactDataForm/ContactDataForm";

export const AccountSettingsPage = () => {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const fetchUser = useAuthStore((s) => s.fetchUser);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (!isInitialized) return;
    if (!user) {
      router.replace("/sign-in");
    }
  }, [isInitialized, user, router]);

  if (!isInitialized || !user) {
    return (
      <section className={styles.section}>
        <div className="_container">
          <p className={styles.loading}>
            Loading...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Account Setting
      </h1>
      <div className={styles.forms}>
        <ContactDataForm user={user} />
        <ChangePasswordForm />
      </div>
      <p className={styles.back}>
        <Button url="/account" variant="bordered" type="link">
          ← Back to account
        </Button>
      </p>
    </section>
  );
};
