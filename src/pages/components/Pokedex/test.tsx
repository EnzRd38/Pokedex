import { render, screen } from '@testing-library/react'
import Pokedex from '.'

describe('<Pokedex />', () => {
	it('should render the heading', () => {
		const { container } = render(<Pokedex />)

		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
