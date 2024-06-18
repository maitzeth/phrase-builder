import { Card } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import styles from './style.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  data: Phrase;
  deletePhrase: (id: string) => void;
}

export const PhraseItem = ({ data, deletePhrase }: Props) => {
  return (
    <Card label={`phrase ${data.id}`}>
      <div className={styles.inner}>
        <div className={styles.titleWrapper}>
          <h3>{data.phrase}</h3>
        </div>
        <div className={styles.actionWrapper}>
          <button
            type="button"
            aria-label="delete phrase"
            onClick={() => {
              deletePhrase(data.id);
            }}
          >
            <FaRegTrashAlt aria-label="trash icon" color="white" />
          </button>
        </div>
      </div>
    </Card>
  );
};
