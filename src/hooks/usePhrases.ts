import { usePhrasesStore } from '@/store/phrase';

export const usePhrases = () => {
  const { phrases, addPhrase, deletePhrase } = usePhrasesStore();

  return { phrases, addPhrase, deletePhrase };
}
