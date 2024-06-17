import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './style.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, disabled, ...rest }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn([styles.main, styles.primary, className])}
        disabled={disabled}
        aria-disabled={disabled ? 'true' : 'false'}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
