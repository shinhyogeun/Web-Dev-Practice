import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Td from './Td';

describe('Cell은', () => {
	const handleClick = jest.fn();
	const tableRow = document.createElement('tr');

	it('받은 숫자를 잘 보여준다.', () => {
		const { getByText } = render(<Td
			row={3}
			col={3}
			value={0}
			onClick={handleClick}
		/>, {
			container: document.body.appendChild(tableRow)
		})

		expect(getByText(0)).toBeInTheDocument();
	});

	it('클릭하면 handleClick함수가 실행된다..', () => {
		const { getByText } = render(<Td
			row={3}
			col={3}
			value={0}
			onClick={handleClick}
		/>, {
			container: document.body.appendChild(tableRow)
		})

		expect(handleClick).not.toBeCalled();
		fireEvent.click(getByText(0));
		expect(handleClick).toBeCalled();
	});

})