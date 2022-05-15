import Head from 'next/head'
import Image from 'next/image'
import { Heading } from 'rebass'
import { Flex } from 'rebass'
import { Card } from '../src/components/card'

export async function getStaticProps() {
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const maxpoke = 30

  const res = await fetch(`${api}/?limit=${maxpoke}`)
  const data = await res.json()

  //add poke index
  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons: data.results
    },
  }
}

export default function Home({ pokemons }) {

  return (
    <div>
      <Heading textAlign='center' m='2rem' fontSize='2rem'>PokeNext</Heading>
      <Flex m='2rem' style={{ gap: '4rem'}} justifyContent='center' flexWrap='wrap'>
       {
         pokemons.map((item) => (
           <Card key={item.id} pokemon={item}/>
         ))
       }
      </Flex>
    </div>
  )
}
