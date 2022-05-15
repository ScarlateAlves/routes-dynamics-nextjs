import React from 'react'
import { Box, Flex } from 'rebass'

export const Footer = () => {
  return(
    <>
    <Box backgroundColor='#41444B' color='#FDDB3A' style={{ border: 'solid 1px black'}}>
     <Flex height='14vh' justifyContent='center' alignItems='center'>
       by Scarlate Alves &copy;  2022 
     </Flex>
    </Box>
    </>
  )
}