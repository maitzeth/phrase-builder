import { PhraseForm } from '@/components/PhraseForm';
import { PhraseRenderer } from '@/components/PhraseRenderer';
import { Container, Input, Button, Modal } from '@/components/ui';
import { usePhrases } from '@/hooks/usePhrases';
import styles from './app.module.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {
  const {
    handleSearchChange,
    onClearSearch,
    searchValue,
    filteredPhrases
  } = usePhrases();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('#title', {
      opacity: 1,
      delay: 0.3,
    });

    tl.to('#button', {
      opacity: 1,
    })
  });

  return (
    <>
      <Container as="main" className={styles.container}>
        <header>
          <div>
            <h1 id="title">Phrasify</h1>
          </div>
          <div>
            <Modal
              trigger={({ handleOpen }) => {
                return (
                  <Button
                    type="button"
                    onClick={() => handleOpen(true)}
                    id="button"
                    className={styles.actionBtn}
                  >
                    Nueva Frase
                  </Button>
                )
              }}
              render={({ handleOpen }) => {
                return (
                  <PhraseForm openModal={handleOpen} />
                );
              }}
            />
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
    </>
  );
}

export default App;
