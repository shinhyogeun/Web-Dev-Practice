import React, { useRef, useState } from "react";

const Reaction = () => {
	const [state, setState] = useState('waiting');
	const [message, setMessage] = useState('클릭해서 시작하세요');
	const [result, setResult] = useState([]);
	const startTime = useRef(null);
	const endTime = useRef(null);

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
			setResult([...result, endTime.current - startTime.current]);
			endTime.current = null;
			startTime.current = null;
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
			{result.length === 0 ?
				null : <div>평균시간: {result.reduce((a, b) => a + b / result.length, 0)}ms</div>}
			<button onClick={handleClickReset}>RESET!</button>
		</>
	)
}

export default Reaction; 