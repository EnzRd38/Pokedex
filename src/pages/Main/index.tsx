import { getPokemonData, getPokemons, searchPokemon } from 'api/pokeapi'
import Navbar from 'pages/components/Navbar/index'
import Pokedex from 'pages/components/Pokedex/index'
import Searchbar from 'pages/components/Searchbar/index'
import { useEffect, useState } from 'react'
import Favorites, { FavoriteProvider } from '../contexts/favorites'

interface ListPokemons {
	results : [
		name: string,
		order: number,
		id: number
	]

}

interface Props {
	pokemons: ListPokemons[]
}
const favoritesKey = "key"

const Main = () => {
	const [page, setPage] = useState(0)
	const [totalPages, setTotalPages] = useState(0)
	const [notFound, setNotFound] = useState(false)
	const [loading, setLoading] = useState(false)
	const [pokemons, setPokemons] = useState<Props[]>([])
	const [favorites, setFavorites] = useState([])

	const onSearchHandler = async (pokemon: string) => {
		if(!pokemon){
			return fetchPokemons()
		}
		setLoading(true)
		setNotFound(false)
		const result = await searchPokemon(pokemon.toLocaleLowerCase())
		if(!result){
			setNotFound(true)
		}else{
			setPokemons([result])
			setPage(0)
			setTotalPages(1)
		}
		setLoading(false)
	}

	const itensPerPage = 27
	const fetchPokemons = async () => {
		try {
			setLoading(true)
			setNotFound(false)
			const data = await getPokemons(itensPerPage, itensPerPage * page);
			const promises = data.results.map(async (pokemon: { url: string }) => {
				return await getPokemonData(pokemon.url)
			});
			const result = await Promise.all(promises)
			setPokemons(result)
			setLoading(false)
			setTotalPages(Math.ceil(data.count / itensPerPage))

		} catch (error) {
			console.log('error: ', error)
		}
	}
	const searchFavoritePokemonsHandler = async (favorites) => {
		setLoading(true)
		setNotFound(false)
		const promises = favorites.map(async (name) => {
			return await searchPokemon(name)
		})
		const result = await Promise.all(promises)
		setPokemons(result)
		setLoading(false)
		setTotalPages(Math.ceil(favorites.length / itensPerPage))
	}

	const loadFavoritePokemons = () => {
		const fav = JSON.parse(window.localStorage.getItem(favoritesKey)) || []
		setFavorites(fav)
	}

	useEffect(() => {
		fetchPokemons()
	}, [page])

	useEffect(() => {
    loadFavoritePokemons()
  }, []);


	const updateFavoritePokemons = (name) => {
		const updateFavorites = [...favorites]
		const favoriteIndex = favorites.indexOf(name)
		if(favoriteIndex >= 0){
			updateFavorites.splice(favoriteIndex, 1)
		}else{
			updateFavorites.push(name)
		}
		window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites))
		setFavorites(updateFavorites)
	}

	return (
		<FavoriteProvider
			value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}
		>
			<main>
				<Navbar searchFavoritePokemons={searchFavoritePokemonsHandler} />
				<Searchbar onSearch={onSearchHandler} />
				{notFound ? (<div className='notFound-text'>Não achamos esse Pokemon...</div>) :
				<Pokedex pokemons={pokemons} loading={loading} page={page} setPage={setPage} totalPages={totalPages} />}
			</main>
		</FavoriteProvider>

	)
}
export default Main
