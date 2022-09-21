import { useState } from 'react'

const Searchbar = (props: any) => {
	const { onSearch } = props

	const [search, setSearch] = useState(0)

	const onChangeHandler = (e: any) => {
		setSearch(e.target.value)
		if(e.target.value.lenght === 0){
			onSearch(undefined)
		}
	}

	const onButtonClickHandler = () => {
		onSearch(search)
	}

	return (
		<div className="searchbar-container">
			<div className="searchbar">
				<input placeholder="Buscar pokemon" onChange={onChangeHandler} />
			</div>
			<div className="searchbar-btn">
				<button onClick={onButtonClickHandler}>Buscar</button>
			</div>
		</div>
	)
}
export default Searchbar
