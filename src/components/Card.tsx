import { Box } from '@chakra-ui/react'

export const Card = ({ children } : any) => { 

  return (
    <Box backgroundColor='#141414' borderRadius='25px' padding='15px' color='#ffffff' >
      { children }
    </Box>
  );
}
