import Pagination from '../Pagination/index';
import PokemonCard from '../PokemonCard/index'

const Pokedex = (props: { pokemons: any; loading: any; page: number; setPage: any; totalPages: number }) => {
	const { pokemons, loading, page, setPage, totalPages } = props
	const onLeftClickHandler = () =>{
		if(page > 0){
			setPage(page-1)
		}
	}
	const onRightClickHandler = () =>{
		if(page !== totalPages-1){
			setPage(page + 1)
		}
	}

	return (
		<div>
			<div className="pokedex-header">
				<h1>Pokedex</h1>
				<Pagination
					page={page+1}
					totalPages={totalPages}
					onLeftClick={onLeftClickHandler}
					onRightClick={onRightClickHandler}
				/>

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
