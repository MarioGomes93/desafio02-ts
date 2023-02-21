import { Header} from './components/Header/Header'
import { Card } from './components/Card'
import { Box } from '@chakra-ui/react'



function App() {
  return (
    <>
      <Box minHeight='100vh' backgroundColor='#242424' padding='25px'>
        <Header></Header>
        <Card></Card>
      </Box>
    </>
  );
}

export default App;
