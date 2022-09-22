export const searchPokemon = async (pokemon: string) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
<<<<<<< HEAD
export const getPokemons = async (limit = 51, offset = 0) => {
=======
export const getPokemons = async (limit = 50, offset = 0) => {
>>>>>>> 9c63704dcc5eea7bd9c7941e35999ab41038ae3b
	try {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
<<<<<<< HEAD
export const getPokemonData = async (url:string) => {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		console.log('erro: ', error)
	}
}
=======
>>>>>>> 9c63704dcc5eea7bd9c7941e35999ab41038ae3b
