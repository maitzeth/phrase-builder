import { cva } from 'class-variance-authority';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { FaTimes } from "react-icons/fa";
import styles from './style.module.css';

const inputVariants = cva(
  styles.inner, {
    variants: {
      variant: {
        default: styles.innerBase,
        error: styles.innerError,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  error?: string;
  valueCount?: number;
  maxValueCount?: number;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    id,
    value,
    onChange,
    onClear,
    error,
    valueCount,
    maxValueCount,
    ...props
  }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id}>{label}</label>
        )}
        {maxValueCount && (
          <p className={styles.count} aria-label={`characters written ${valueCount}`}>
            {valueCount} {maxValueCount ? `/ ${maxValueCount}` : ''}
          </p>
        )}
        <div className={inputVariants({ variant: error ? 'error' : 'default' })}>
          <input
            type="text"
            id={id}
            value={value}
            className={styles.input}
            ref={ref}
            onChange={onChange}
            {...props}
            aria-errormessage={error}
            maxLength={maxValueCount}
          />
          {value && value.length > 0 && (
            <button type="button" aria-label="clear search" onClick={onClear}>
              <FaTimes aria-label="clear search icon" />
            </button>
          )}
        </div>
        <div className={styles.textWrapper}>
          {error && (
            <p className={styles.error}>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);
