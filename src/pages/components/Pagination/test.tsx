import { render, screen } from '@testing-library/react'
import Pagination from './index'

describe('<Pagination />', () => {
	it('should render the heading', () => {
		const { container } = render(<Pagination pokemon={undefined} />)

		expect(
			screen.getByRole('heading', { name: /react avançado/i })
		).toBeInTheDocument()

		expect(container.firstChild).toMatchSnapshot()
	})
})
