import { cn } from '@/lib/utils';
import { ElementType, HTMLAttributes, PropsWithChildren, createElement, forwardRef } from 'react';
import styles from './style.module.css';

interface ContainerProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, as, className, ...rest }, ref) => {
    return createElement(
      as ?? 'div',
      {
        ...rest,
        ref, className: cn([styles.main, className])
      },
      children
    );
  }
);
