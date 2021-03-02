import React from "react";
import OneCell from "./OneCell";

const OneLine = ({ line, dispatch, row }) => {
	return (
		<tr>
			{line.map((cell, col) =>
				<OneCell
					key={String(cell + col + row)}
					row={row}
					col={col}
					cell={cell}
					dispatch={dispatch}
				/>
			)}
		</tr>
	);
};

export default OneLine;