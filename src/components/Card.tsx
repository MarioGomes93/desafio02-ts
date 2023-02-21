import { 
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { ButtonLogin } from '../../src/components/Button'

export const Card = (): any => {
  return (
    <ChakraProvider>
        <Box backgroundColor='#141414' borderRadius='25px' padding='15px' color='#ffffff' >
          <Center margin='10px 0' fontSize={20}>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" margin='10px 0'/>
          <Input placeholder="password" margin='10px 0'/>
          <Center>             
            <ButtonLogin/>
          </Center>
        </Box>
    </ChakraProvider>
  )
}