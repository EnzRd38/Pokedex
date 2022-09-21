import { useContext } from "react"
import Favorites from "../../contexts/favorites"

const PokemonCard = (props: { pokemon: any }) => {
	const {favoritePokemons, updateFavoritePokemons} = useContext(Favorites)
	const { pokemon } = props
	const favoriteClick = () => {
		updateFavoritePokemons(pokemon.name)
	}
	const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤"

	return (
	<div className="pokemon-card">
		<div className="pokemon-image-container">
			<img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
		</div>
		<div className="card-body">
			<div className="card-top">
				<h3> {pokemon.name} </h3>
				<h4>#{pokemon.id}</h4>
			</div>
			<div className="card-bottom">
				<div className="pokemon-types">
					{pokemon.types.map((type, index) =>{
						return (
							<div key={index} className="pokemon-type-name">
								{type.type.name}
							</div>
						)
					})}
				</div>
				<button className="pokemon-favorite" onClick={favoriteClick}>
					{heart}
				</button>
			</div>
		</div>
	</div>
	)
}

export default PokemonCard
