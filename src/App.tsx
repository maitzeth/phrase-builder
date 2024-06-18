import { PhraseForm } from '@/components/PhraseForm';
import { Container } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import { useState } from 'react';
import { PhraseRenderer } from '@/components/PhraseRenderer';


function App() {
  const [phrases, setPhrases] = useState<Phrase[]>(() => {
    const savedPhrases = localStorage.getItem('phrases');
    return savedPhrases ? JSON.parse(savedPhrases) : [];
  });

  const handleCreateNewPhrase = (phrase: Phrase) => {
    setPhrases((prev) => {
      const newState = [...prev, phrase];

      localStorage.setItem('phrases', JSON.stringify(newState));

      return newState;
    });
  };

  const handleDeletePhrase = (id: string) => {
    setPhrases((prev) => {
      const newState = prev.filter((phrase) => phrase.id !== id);
      localStorage.setItem('phrases', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <Container as="main">
      <PhraseForm handleCreateNewPhrase={handleCreateNewPhrase} />
      <PhraseRenderer phrases={phrases} deletePhrase={handleDeletePhrase} />
    </Container>
  );
}

export default App;
