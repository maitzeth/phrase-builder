import { PhraseForm } from '@/components/PhraseForm';
import { Container } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import { useState } from 'react';


function App() {
  const [, setPhrases] = useState<Phrase[]>(() => {
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

  return (
    <Container as="main">
      <PhraseForm handleCreateNewPhrase={handleCreateNewPhrase} />
    </Container>
  );
}

export default App;
