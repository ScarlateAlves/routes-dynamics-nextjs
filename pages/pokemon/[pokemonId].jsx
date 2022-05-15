import Image from 'next/image'
import { Flex } from 'rebass'
import { Heading } from 'rebass'
import { Box, Text } from 'rebass'

export const getStaticPaths = async() => {
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const maxpoke = 30

  const res = await fetch(`${api}/?limit=${maxpoke}`)
  const data = await res.json()

  //return params
  const paths = data.results.map((pokemon, index) => {
    return{
      params: { 
        pokemonId: ( index + 1).toString()
      }
    }
  })  

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async(context) => {
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const id = context.params.pokemonId

  const res = await fetch(`${api}${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data}
  }
}


export default function Pokemon({ pokemon }) {
  const apiImage = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`

  return(
    <>
   <Flex m='2rem' flexDirection='column' alignItems='center' justifyContent='center'>
    <Heading>
      {pokemon.name}
    </Heading>
    <Image width='200px' height='200px' src={apiImage} alt={pokemon.name} />
    <Text>Número: { pokemon.id }</Text>
   <Box>
     Tipo:
     {
      pokemon.types.map((item, index) => (
          <span key={index}> { item.type.name } </span>
      ))
    }
   </Box>
    <Text>Altura: {pokemon.height}</Text>
    <Text>Peso: {pokemon.weight}</Text>
    </Flex> 
    </>
  )
}