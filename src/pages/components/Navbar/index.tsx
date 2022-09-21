import { useContext } from "react"
import { searchPokemon } from "../../../api/pokeapi"
import Favorites from "../../contexts/favorites"

const Navbar = (props) => {
	const {searchFavoritePokemons} = props
	const {favoritePokemons} = useContext(Favorites)

	const onButtonClickHandler = () => {
		searchFavoritePokemons(favoritePokemons)
	}
	return (
		<nav>
			<div>
				<img
					alt="pokedex-logo"
					src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
					className="navbar-img"
				/>
			</div>
			<button onClick={onButtonClickHandler}>
				{favoritePokemons.length} ❤️ Favoritos
			</button>
		</nav>
	)
}

export default Navbar
