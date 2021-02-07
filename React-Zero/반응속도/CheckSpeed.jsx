import React, { useState, useRef, useReducer } from "react";

const CheckSpeed = () => {
	const [state, setState] = useState('waiting');
	const [message, setMessage] = useState('클릭해서 시작하세요');
	const [result, setResult] = useState([]);

	let startTime = useRef();
	let endTime = useRef();

	const handleClickScreen = () => {
		if (state === 'waiting') {
			setState('ready')
			setMessage('초록색이 되면 클릭하세요!')
			setTimeout(() => {
				startTime.current = new Date();
				setState('now')
				setMessage('지금이에요!!')
			}, Math.ceil(Math.random() * 1000) + 2000)
		} else if (state === 'ready') {
			setState('waiting')
			setMessage('성급하시군요 ㅎㅎ')
		} else if (state === 'now') {
			endTime.current = new Date();
			setState('waiting')
			setMessage('클릭해서 시작하세요')
			console.log(endTime.current)
			console.log(startTime.current)
			setResult([...result, endTime.current - startTime.current]);
		}
	}

	const handleClickReset = () => {
		setState('waiting')
		setMessage('클릭해서 시작하세요')
		setResult([]);
	}

	return (
		<>
			<div
				id='screen'
				className={state}
				onClick={handleClickScreen}
			>
				{message}
			</div>
			{result.length === 0
				?
				null
				:
				<div>평균시간: {result.reduce((a, b) => a + b / result.length)}ms</div>}
			<button onClick={handleClickReset}>RESET!</button>
		</>
	)
}

export default CheckSpeed;