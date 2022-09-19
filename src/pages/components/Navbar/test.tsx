import { render, screen } from '@testing-library/react'
import Navbar from '.'

describe('<Navbar />', () => {
	it('should render the heading', () => {
		const { container } = render(<Navbar />)

		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
