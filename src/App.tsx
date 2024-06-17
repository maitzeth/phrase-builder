import { Input } from '@/components/ui';

function App() {
  return (
    <div style={{ paddingInline: '40px' }}>
      <Input value="test" label="Search" id="search" onChange={(event) => event} />
    </div>
  )
}

export default App
