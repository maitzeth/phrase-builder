import { PhraseForm } from '@/components/PhraseForm';
import { PhraseRenderer } from '@/components/PhraseRenderer';
import { Container, Input } from '@/components/ui';
import { Phrase } from '@/types/phrase';
import { debounce } from 'lodash';
import { useMemo, useState } from 'react';


function App() {
  const [phrases, setPhrases] = useState<Phrase[]>(() => {
    const savedPhrases = localStorage.getItem('phrases');
    return savedPhrases ? JSON.parse(savedPhrases) : [];
  });

  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handle creation for a new phrase to be added
   */
  const handleCreateNewPhrase = (phrase: Phrase) => {
    setPhrases((prev) => {
      const newState = [...prev, phrase];
      localStorage.setItem('phrases', JSON.stringify(newState));
      return newState;
    });
  };

  /**
   * Handle delete for phrases
   */
  const handleDeletePhrase = (id: string) => {
    setPhrases((prev) => {
      const newState = prev.filter((phrase) => phrase.id !== id);
      localStorage.setItem('phrases', JSON.stringify(newState));
      return newState;
    });
  };

  /**
   * Debounce function from lodash to limit the rate of updates to the search term.
   */
  const debouncedSetSearchTerm = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 300),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    debouncedSetSearchTerm(event.target.value);
  };

  /**
   * Filter phrases based on the search term.
   */
  const filteredPhrases = useMemo(
    () => phrases.filter((phrase) =>
      phrase.phrase.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [phrases, searchTerm]
  );

  return (
    <Container as="main">
      <Input
        id="search"
        value={searchValue}
        type="text"
        placeholder="Buscar frase"
        onChange={handleSearchChange}
      />
      <PhraseForm handleCreateNewPhrase={handleCreateNewPhrase} />
      <PhraseRenderer phrases={filteredPhrases} deletePhrase={handleDeletePhrase} />
    </Container>
  );
}

export default App;
