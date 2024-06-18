import { PhraseForm } from '@/components/PhraseForm';
import { PhraseRenderer } from '@/components/PhraseRenderer';
import { Container } from '@/components/ui';
// import { usePhrasesStore } from '@/hooks/usePhrases';
import styles from './app.module.css';


function App() {
  // const [phrases, setPhrases] = useState<Phrase[]>(() => {
  //   const savedPhrases = localStorage.getItem('phrases');
  //   return savedPhrases ? JSON.parse(savedPhrases) : [];
  // });

  // const [searchValue, setSearchValue] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handle creation for a new phrase to be added
   */
  // const handleCreateNewPhrase = (phrase: Phrase) => {
  //   setPhrases((prev) => {
  //     const newState = [...prev, phrase];
  //     localStorage.setItem('phrases', JSON.stringify(newState));
  //     return newState;
  //   });
  // };

  /**
   * Handle delete for phrases
   */
  // const handleDeletePhrase = (id: string) => {
  //   setPhrases((prev) => {
  //     const newState = prev.filter((phrase) => phrase.id !== id);
  //     localStorage.setItem('phrases', JSON.stringify(newState));
  //     return newState;
  //   });
  // };

  // /**
  //  * Debounce function from lodash to limit the rate of updates to the search term.
  //  */
  // const debouncedSetSearchTerm = useMemo(
  //   () => debounce((term: string) => setSearchTerm(term), 300),
  //   []
  // );

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target
  //   setSearchValue(value);
  //   debouncedSetSearchTerm(value);
  // };

  // const onClearSearch = () => {
  //   setSearchValue('');
  //   setSearchTerm('');
  // }

  // /**
  //  * Filter phrases based on the search term.
  //  */
  // const filteredPhrases = useMemo(
  //   () => phrases.filter((phrase) => {
  //     return phrase.phrase.toLowerCase().includes(searchTerm.toLowerCase());
  //   }),
  //   [phrases, searchTerm]
  // );

  return (
    <Container as="main" className={styles.container}>
      <header>
        <div>
          <h1>Phrasify</h1>
        </div>
        <div>
          <PhraseForm />
        </div>
      </header>
      <div className={styles.headerInner}>
        {/* <Input
          id="search"
          value={searchValue}
          type="text"
          placeholder="Filtrar frase..."
          onChange={handleSearchChange}
          onClear={onClearSearch}
        /> */}
      </div>
      <PhraseRenderer />
    </Container>
  );
}

export default App;
