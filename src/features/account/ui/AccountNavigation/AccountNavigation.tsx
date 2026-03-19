"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/features/account/store/auth";

import styles from "./AccountNavigation.module.scss";

export const AccountNavigation = () => {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const pathname = usePathname();
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const isLoading = useAuthStore((s) => s.isLoading);
  const fetchUser = useAuthStore((s) => s.fetchUser);
  const logout = useAuthStore((s) => s.logout);

  console.log(pathname);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (!isInitialized || isLoading) return;
    if (!user) {
      router.replace("/sign-in");
    }
  }, [isInitialized, isLoading, user, router]);
  
  const handleLogout = async () => {
    await logout();
    router.push("/sign-in");
  };

  const displayName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "there";

  const navItems = [
    {
      href: "/account/my-orders",
      label: "My Orders",
    },
    {
      href: "/account/my-services",
      label: "My Services",
    },
    {
      href: "/account/account-settings",
      label: "Account Setting",
    },
  ];

  return (
    <div className={styles.accountNavigation}>
      <h2 className={styles.greeting}>
        Hi, {displayName}!
      </h2>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.linkButton} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}

        <button type="button" onClick={handleLogout} className={styles.logout}>
          Log Out
        </button>
      </nav>
    </div>
  );
};
