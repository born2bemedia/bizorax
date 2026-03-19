import type { ButtonHTMLAttributes, ReactNode } from 'react';

import Link from 'next/link';

import styles from './Button.module.scss';

type ButtonVariant = 'white' | 'blue' | 'bordered';
type ButtonType = 'button' | 'submit' | 'reset' | 'link';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  type?: ButtonType;
  url?: string;
  variant?: ButtonVariant;
};

function getClassName(variant: ButtonVariant, className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(' ');
}

export const Button = ({
  children,
  className,
  disabled = false,
  onClick,
  type = 'button',
  url = '#',
  variant = 'white',
}: ButtonProps) => {
  const buttonClassName = getClassName(variant, className);

  if (type === 'link') {
    return (
      <Link href={url} className={buttonClassName} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
