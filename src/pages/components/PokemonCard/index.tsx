const PokemonCard = (props: { pokemon: any }) => {
	const { pokemon } = props
	return <div>{pokemon.name}</div>
}

export default PokemonCard
