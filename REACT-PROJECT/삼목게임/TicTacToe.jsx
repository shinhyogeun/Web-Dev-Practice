import React, { useReducer, useEffect, useMemo } from 'react';
import OneLine from "./OneLine";

const initialState = {
	turn: "X",
	winner: null,
	recentPosition: [-1, -1],
	board: [
		["", "", ""],
		["", "", ""],
		["", "", ""]
	],
}

export const SET_WINNER = 'SET_WINNER';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESTART = 'RESTART';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_WINNER': {
			return {
				...state,
				winner: action.winner,
			};
		}
		case 'UPDATE_BOARD': {
			const tableData = [...state.board]
			tableData[action.row] = [...tableData[action.row]]
			tableData[action.row][action.col] = state.turn
			return {
				...state,
				board: tableData,
				recentPosition: [action.row, action.col],
			};
		}
		case 'CHANGE_TURN': {
			return {
				...state,
				turn: state.turn === "O" ? "X" : "O"
			}
		}
		case 'RESTART': {
			return {
				...state,
				turn: "X",
				recentPosition: [-1, -1],
				board: [
					["", "", ""],
					["", "", ""],
					["", "", ""]
				],
			}
		}
	}
}

const TicTacToe = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { turn, recentPosition, winner, board } = state;

	const checkWinner = (row, col, turn, board) => {
		if (row < 0) {
			return "START";
		}

		if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn) {
			return turn;
		}

		if (board[2][0] === turn && board[1][1] === turn && board[0][2] === turn) {
			return turn;
		}

		if (board[row][0] === turn && board[row][1] === turn && board[row][2] === turn) {
			return turn;
		}

		if (board[0][col] === turn && board[1][col] === turn && board[2][col] === turn) {
			return turn;
		}

		if (!board.flat().includes("")) {
			return "DRAW"
		}
	}

	useEffect(() => {
		if (checkWinner(...recentPosition, turn, board) === "DRAW") { // 비겼을 때
			dispatch({ type: SET_WINNER, winner: "DRAW" })
			return dispatch({ type: RESTART })
		}
		if (checkWinner(...recentPosition, turn, board) === "START") { // 시작했을 때
			return;
		}
		if (!checkWinner(...recentPosition, turn, board)) { // 승부가 안났을 때
			return dispatch({ type: CHANGE_TURN })
		}
		dispatch({
			type: SET_WINNER,
			winner: checkWinner(...recentPosition, turn, board)
		})
		dispatch({ type: RESTART })
	}, [recentPosition]);

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
							dispatch={dispatch}
						/>
					)}
				</tbody>
			</table >
			{useMemo(() => {
				console.log("밑에 렌더되는중")
				return winner === "DRAW" ? <h1>비겼습니다.</h1> :
					winner !== null ? <h1>{winner}의 승리!</h1> : null
			}, [winner])}
		</>
	)
};

export default TicTacToe;