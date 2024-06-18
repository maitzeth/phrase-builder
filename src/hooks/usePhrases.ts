import { usePhrasesStore } from '@/store/phrase';
import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

export const usePhrases = () => {
  const { phrases } = usePhrasesStore();

  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filter phrases based on the search term.
   */
  const filteredPhrases = useMemo(
    () => phrases.filter((phrase) => {
      return phrase.phrase.toLowerCase().includes(searchTerm.toLowerCase());
    }),
    [phrases, searchTerm]
  );

  /**
   * Debounce function from lodash to limit the rate of updates to the search term.
   */
  const debouncedSetSearchTerm = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 1000),
    []
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value);
    debouncedSetSearchTerm(value);
  };

  const onClearSearch = () => {
    setSearchValue('');
    setSearchTerm('');
  }

  return {
    filteredPhrases,
    searchValue,
    handleSearchChange,
    onClearSearch
  };
}
