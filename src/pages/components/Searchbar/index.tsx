import { useState } from 'react'

const Searchbar = (props: any) => {
	const { onSearch } = props

	const [search, setSearch] = useState('ditto')

	const onChangeHandler = (e: any) => {
		setSearch(e.target.value)
	}

	const onButtonClickHandle = () => {
		onSearch(search.toLocaleLowerCase())
	}

	return (
		<div className="searchbar-container">
			<div className="searchbar">
				<input placeholder="Buscar pokemon" onChange={onChangeHandler} />
			</div>
			<div className="searchbar-btn">
				<button onClick={onButtonClickHandle}>Buscar</button>
			</div>
		</div>
	)
}
export default Searchbar
