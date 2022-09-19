import { getPokemons, searchPokemon } from 'api/pokeapi'
import Navbar from 'pages/components/Navbar'
import Pokedex from 'pages/components/Pokedex'
import Searchbar from 'pages/components/Searchbar'
import { useEffect, useState } from 'react'

interface ListPokemons {
	name: string
	order: number
	id: number
}

interface Props {
	pokemons: ListPokemons[]
}

const Main = () => {
	const [loading, setLoading] = useState(false)
	const [pokemons, setPokemons] = useState<Props[]>([])

	const onSearchHandler = async (pokemon: string) => {
		await searchPokemon(pokemon)
	}

	const fetchPokemons = async () => {
		try {
			setLoading(true)
			const result = await getPokemons()
			setPokemons(result)
			setLoading(false)
		} catch (error) {
			console.log('error: ', error)
		}
	}

	useEffect(() => {
		fetchPokemons()
	}, [])

	return (
		<main>
			<Navbar />
			<Searchbar onSearch={onSearchHandler} />
			<Pokedex pokemons={pokemons.results} loading={loading} />
		</main>
	)
}
export default Main
