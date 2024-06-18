import { PiEmptyThin } from "react-icons/pi";
import styles from './style.module.css';

export const PhraseEmpty = () => {
  return (
    <div className={styles.main}>
      <PiEmptyThin aria-label="empty icon" size={60} />
      <h3>No hay frases agregadas, agrega una.</h3>
    </div>
  );
};


