import React, { useState } from 'react';
import OneLine from "./OneLine";

const Tictactoe = () => {
	const [turn, setTurn] = useState("X");
	const [board, setBoard] = useState(
		[["", "", ""],
		["", "", ""],
		["", "", ""]]
	);
	const [winner, setWinner] = useState(null);

	const handleClick = (row, col) => {
		if (board[row][col]) {
			return
		}

		const next = [[...board[0]], [...board[1]], [...board[2]]];

		next[row][col] = turn;
		setBoard(next);
		console.log(checkWinner(row, col, turn, next))
		if (!checkWinner(row, col, turn, next)) {
			turn === "X" ? setTurn("O") : setTurn("X");
		}
	}

	const restart = (turn) => {
		setWinner(turn);
		setBoard(
			[["", "", ""],
			["", "", ""],
			["", "", ""]]);
		setTurn("X");
		return "asd"
	}

	const checkWinner = (row, col, turn, board) => {
		if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn) {
			return restart(turn);
		}

		if (board[2][0] === turn && board[1][1] === turn && board[0][2] === turn) {
			return restart(turn);
		}

		if (board[row][0] === turn && board[row][1] === turn && board[row][2] === turn) {
			return restart(turn);
		}

		if (board[0][col] === turn && board[1][col] === turn && board[2][col] === turn) {
			return restart(turn);
		}

		if (!board.flat().includes("")) {
			return restart("No")
		}
	}

	return (
		<>
			<table style={{
				"border": "1px solid black",
				"borderCollapse": "collapse",
				"textAlign": "center",
				"fontSize": "30px",
			}}>
				<tbody>
					{board.map((oneLine, row) =>
						<OneLine
							key={String(oneLine + row)}
							row={row}
							line={oneLine}
							onClick={handleClick}
						/>
					)}
				</tbody>
			</table >
			{winner === "No" ?
				<h1>비겼습니다.</h1>
				:
				winner !== null ?
					<h1>{winner}의 승리!</h1> : null
			}
		</>
	)
};

export default Tictactoe;