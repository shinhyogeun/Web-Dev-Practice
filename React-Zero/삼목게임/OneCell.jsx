import React from "react";

const OneCell = ({ cell, onClick, row, col }) => {
	return (
		<td style={{
			"border": "1px solid black",
			"width": "50px",
			"height": "50px",
		}}
			onClick={() => { onClick(row, col) }}
		>
			{cell}
		</td>
	);
}

export default OneCell;