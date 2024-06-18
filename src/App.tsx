import { PhraseForm } from '@/components/PhraseForm';
import { PhraseRenderer } from '@/components/PhraseRenderer';
import { Container, Input } from '@/components/ui';
import { usePhrases } from '@/hooks/usePhrases';
import styles from './app.module.css';

function App() {
  const { handleSearchChange, onClearSearch, searchValue, filteredPhrases } = usePhrases();

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
        <Input
          id="search"
          value={searchValue}
          type="text"
          placeholder="Filtrar frase..."
          onChange={handleSearchChange}
          onClear={onClearSearch}
        />
      </div>
      <PhraseRenderer phrases={filteredPhrases} />
    </Container>
  );
}

export default App;
