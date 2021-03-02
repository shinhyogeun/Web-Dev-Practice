import React, { memo, useCallback } from "react";
import { UPDATE_BOARD } from "./TicTacToe";

const OneCell = memo(({ cell, dispatch, row, col }) => {

	const handleClick = useCallback(() => {
		if (cell !== "") {
			return;
		}
		dispatch({ type: UPDATE_BOARD, row: row, col: col })
	}, [cell]);

	return (
		<td
			style={{
				"border": "1px solid black",
				"width": "50px",
				"height": "50px",
			}}
			onClick={handleClick}
		>
			{cell}
		</td>
	);
})

export default OneCell;