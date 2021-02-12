import React from "react";
import OneCell from "./OneCell";

const OneLine = ({ line, onClick, row }) => {
	return (
		<tr>
			{line.map((cell, col) =>
				<OneCell
					key={String(cell + col + row)}
					row={row}
					col={col}
					cell={cell}
					onClick={onClick}
				/>
			)}
		</tr>
	);
}

export default OneLine;