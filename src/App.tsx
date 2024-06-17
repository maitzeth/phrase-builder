import { Input, Container, Button, Card } from '@/components/ui';


function App() {
  return (
    <Container as="main">
      <Input
        placeholder="Filter your phrase"
        value=""
        id="search"
        onChange={(event) => event}
        error="Required"
      />
      <Button type="button">
        Button
      </Button>
      <Card label="testing card">
        <p>This is a test</p>
      </Card>
    </Container>
  )
}

export default App
