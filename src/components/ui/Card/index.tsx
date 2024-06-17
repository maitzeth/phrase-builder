import styles from './style.module.css';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  label: string;
}

export const Card = ({ children, label }: Props) => {
  return (
    <article className={styles.main} aria-label={label}>
      {children}
    </article>
  );
};
