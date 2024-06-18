import { Card } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import styles from './style.module.css';
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  data: Phrase;
}

export const PhraseItem = ({ data }: Props) => {
  return (
    <Card label="qwe">
      <div className={styles.inner}>
        <div className={styles.titleWrapper}>
          <h3>{data.phrase}</h3>
        </div>
        <div className={styles.actionWrapper}>
          <button type="button" aria-label="delete phrase">
            <FaRegTrashAlt aria-label="trash icon" color="white" />
          </button>
        </div>
      </div>
    </Card>
  );
};
