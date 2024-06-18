import styles from './style.module.css';
import { cva } from 'class-variance-authority';
import { PhraseEmpty } from '@/components/PhraseEmpty';
import { PhraseItem } from '@/components/PhraseItem';
import { usePhrasesStore } from '@/store/phrase';
import { memo } from 'react';
import { Phrase } from '@/types/phrase';

interface Props {
  phrases: Phrase[];
}

const wrapperVariants = cva(
  styles.main, {
    variants: {
      variant: {
        default: styles.default,
        empty: styles.empty,
      },
    },
  }
);

const PhraseRendererComponent = ({ phrases }: Props) => {
  const { deletePhrase } = usePhrasesStore();
  const emptyState = phrases.length > 0;

  return (
    <section className={wrapperVariants({ variant: emptyState ? 'default' : 'empty' })}>
      {emptyState ? phrases.map(
        (phrase) => (
          <PhraseItem
            key={phrase.id}
            data={phrase}
            deletePhrase={deletePhrase}
          />
        )
      ) : <PhraseEmpty />}
    </section>
  );
};

export const PhraseRenderer = memo(PhraseRendererComponent);

