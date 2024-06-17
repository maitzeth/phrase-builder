import { Input } from '@/components/ui';

function App() {
  return (
    <div style={{ paddingInline: '40px' }}>
      <Input
        placeholder="Filter your phrase"
        value=""
        label="Search"
        id="search"
        onChange={(event) => event}
        error="Required"
      />
    </div>
  )
}

export default App
