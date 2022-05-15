import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Flex, Box, Button, Text } from 'rebass'

export const Card = ({ pokemon }) => {
  const apiImage = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`

  const router = useRouter()
  const { push } = router
  return(
    <>
    <Flex
      flexDirection='column'
      width='18%'
      style={{ borderRadius: '1rem', border: '2px solid #E33D33', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.5)' }} 
      backgroundColor='#41444B' 
      p='3rem'
      >
      <Image alt={pokemon.name} src={apiImage} width="100px" height='200px' />
      <Flex style={{ gap: '1rem'}} color='#F6F4E6' flexDirection='column' alignItems='center'>
      <Box mt='1rem' style={{ borderRadius: '0.3rem'}} p='0.2rem' backgroundColor='#E33D33'>#{pokemon.id}</Box>
      <Text style={{  textTransform: 'capitalize', fontSize: '1.4em'}}>
        { pokemon.name }
      </Text>
      <Button color='#41444B' onClick={() => push(`/pokemon/${pokemon.id}`)}>Detalhes</Button>
      </Flex>
    </Flex>
    </>
  )

}