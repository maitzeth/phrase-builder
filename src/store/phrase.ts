import { create } from 'zustand';
import { persist, createJSONStorage  } from 'zustand/middleware';

import { Phrase } from '@/types/phrase';

interface Store {
  phrases: Phrase[];
  addPhrase: (phrase: Phrase) => void;
  deletePhrase: (id: string) => void;
}

export const usePhrasesStore = create<Store>()(
  persist(
    (set, get) => ({
      phrases: [],
      addPhrase(phrase) {
        return set({ phrases: [...get().phrases, phrase] })
      },
      deletePhrase(id) {
        return set({ phrases: get().phrases.filter((phrase) => phrase.id !== id)})
      },
    }),
    {
      name: 'phrases-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ phrases: state.phrases }),
    },
  ),
);