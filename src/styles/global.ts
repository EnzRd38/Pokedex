import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
	//Navbar
	nav{
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
	.navbar-img{
		width: 160px;
	}

	//Searchbar
	.searchbar-container{
		display: flex;
		margin: 0px auto;
		padding: 0 20px;
		align-items: center;
	}
	.searchbar{
		background-color: white;
		margin-right: 20px;
	}
	.searchbar input{
		padding: 10px;
		box-shadow: 0px 2px 2px (0,0,0,0.25);
		border-radius: 3px;
		border: none;
	}
	.searchbar-btn button{
		background-color: #EF5350;
		border: none;
		border-radius: 10px;
		height: 44px;
		color: white;
		padding: 10px 12px;
	}

	//Pokedex
	.pokedex-header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}
	.pokedex-grid{
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(3, 1fr);
	}

	//PokemonCard
	.pokemon-card{
		display: flex;
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 3px;
	}
	.pokemon-image{
		width: 120px;
		height: 120px;
		margin-right: 10px;
	}
	.pokemon-image-container{
		padding: 0px 5px;
	}
	.card-body{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 10px 10px 0px;
		flex: 1;
	}
	.card-top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.card-top h3{
		text-transform: capitalize;
	}
	.card-bottom{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.pokemon-types{
		display: flex;
	}
	.pokemon-type-name{
		margin-right: 10px;
		text-transform: capitalize;
	}
	.pokemon-favorite {
		border: none;
		background-color: white;
		padding: 4px;
		cursor: pointer;
		align-items: center;
	}

	//Pagination
	.pagination-container{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.pagination-container button{
		border: none;
		background-color: white;
		padding: 4px;
		cursor: pointer;
		align-items: center;
	}

	//NotFound
	.notFound-text{
		text-align: center;
		font-size: 1.25rem;
		padding: 20px;
	}

  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
