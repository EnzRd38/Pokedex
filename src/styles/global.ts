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
