import { Card } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import styles from './style.module.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
 
interface Props {
  data: Phrase;
  deletePhrase: (id: string) => void;
}

export const PhraseItem = ({ data, deletePhrase }: Props) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
        away: { opacity: 0, x: 100, transition: { duration: 0.35 } }
      }}
      initial="hidden"
      animate="show"
      exit="away"
      className={styles.main}
    >
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
    </motion.li>
  );
};
