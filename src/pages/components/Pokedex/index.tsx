import PokemonCard from '../PokemonCard'

const Pokedex = (props: { pokemons: any; loading: any }) => {
	const { pokemons, loading } = props
	return (
		<div>
			<div className="pokedex-header">
				<h1>Pokedex</h1>
				<div>Paginação</div>
			</div>
			{loading && !pokemons ? (
				<div>Carregando...</div>
			) : (
				<div className="pokedex-grid">
					{pokemons &&
						pokemons.map((pokemon: any, index: number) => {
							return <PokemonCard key={index} pokemon={pokemon} />
						})}
				</div>
			)}
		</div>
	)
}

export default Pokedex
