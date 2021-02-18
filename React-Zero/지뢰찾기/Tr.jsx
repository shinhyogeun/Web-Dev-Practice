import React from 'react';

import Td from './Td';

const Tr = ({ row, cols, onClick }) => {
	return (
		<tr>
			{cols.map((value, col) => (
				<Td
					key={String(row) + String(col)}
					row={row}
					col={col}
					value={value}
					onClick={onClick}
				/>))}
		</tr>
	)
}

export default Tr;