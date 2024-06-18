import { Phrase } from '@/types/phrase';
import styles from './style.module.css';
import { cva } from 'class-variance-authority';
import { PhraseEmpty } from '@/components/PhraseEmpty';
import { PhraseItem } from '@/components/PhraseItem';

interface Props {
  phrases: Phrase[];
  deletePhrase: (id: string) => void;
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

export const PhraseRenderer = ({ phrases, deletePhrase }: Props) => {
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

