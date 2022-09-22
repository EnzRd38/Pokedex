export const searchPokemon = async (pokemon: string) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
export const getPokemons = async (limit = 51, offset = 0) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
export const getPokemonData = async (url:string) => {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
