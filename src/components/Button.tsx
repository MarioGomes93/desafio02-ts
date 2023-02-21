import { Button } from '@chakra-ui/react'
import { login } from '../services/login'

export const ButtonLogin  = () => {
  return(
    <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>Login</Button>
  )
}
