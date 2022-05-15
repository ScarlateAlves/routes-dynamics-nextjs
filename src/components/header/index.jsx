import Link from 'next/link'
import React from 'react'
import { Text } from 'rebass'
import { Flex, Box, Heading } from 'rebass'
export const Header = () => {
 return(
  <>
  <nav>
    <Flex color='#FDDB3A' alignItems='center' p='2rem' height='11vh' backgroundColor='#41444B' justifyContent='space-between'>
     <Link href='/'><Heading fontSize='2rem'>
        Pokemon
      </Heading>
      </Link> 
      <Flex justifyContent='space-between' alignItems='center' style={{ gap: '1rem'}}>
        <Link href='/'><Text fontSize='1.3rem'>Home</Text></Link>
        <Link href='/sobre'><Text fontSize='1.3rem'>Sobre</Text></Link>
      </Flex>
    </Flex>
  </nav>
  </>
 )
}