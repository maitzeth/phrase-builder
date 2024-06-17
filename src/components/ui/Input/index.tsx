import styles from './style.module.css';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import { FaTimes } from "react-icons/fa";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, value, onChange, onClear, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id}>{label}</label>
        )}
        <div className={styles.inner}>
          <input
            type="text"
            id={id}
            value={value}
            className={styles.input}
            ref={ref}
            onChange={onChange}
            {...props}
          />
          {value && value.length > 0 && (
            <button type="button" aria-label="clear search" onClick={onClear}>
              <FaTimes aria-label="clear search icon" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

