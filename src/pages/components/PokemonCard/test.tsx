import { render, screen } from '@testing-library/react'
import PokemonCard from '.'

describe('<PokemonCard />', () => {
	it('should render the heading', () => {
		const { container } = render(<PokemonCard />)

		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
