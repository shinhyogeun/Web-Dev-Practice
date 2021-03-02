import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Ball from "./Ball";

const makeLottoNumber = (arr = []) => {
	if (arr.length === 7) {
		return [...arr.slice(0, 6).sort((a, b) => a - b), arr[arr.length - 1]];
	}
	const rangeArray = Array(45).fill().map((a, i) => i + 1)
	const randomIndex = Math.floor(Math.random() * 45);
	return arr.includes(rangeArray[randomIndex]) ?
		makeLottoNumber(arr) :
		makeLottoNumber([...arr, rangeArray[randomIndex]]);
}

//useMemo는 함수의 결과값을 기억한다.
//useRef는 일반 값을 기억한다.

const LottoFunction = () => {
	const [showNumber, setShowNumber] = useState([]);
	const lottoNumbers = useMemo(() => makeLottoNumber(), []);
	const [lottoNumber, setLottoNumber] = useState(lottoNumbers);
	const [bonusNumber, setBonusNumber] = useState(null);
	const [redo, setRedo] = useState(false);
	const timeTrash = useRef([]);

	const update = () => {
		for (let i = 0; i < 6; i++) {
			timeTrash.current[i] = setTimeout(() => {
				setShowNumber((preveState) => [...preveState, lottoNumber[i]])
			}, i * 1000)
		}

		timeTrash.current[6] = setTimeout(() => {
			setBonusNumber(lottoNumber[6]);
			setRedo(true);
		}, 6000)
	}

	const handleClick = useCallback(() => {
		setLottoNumber(makeLottoNumber());
		setShowNumber([]);
		setBonusNumber(null);
		setRedo(false);
		timeTrash.current = [];
	}, [])

	useEffect(() => {
		update();
		return () => {
			timeTrash.current.forEach((time) => { clearTimeout(time) });
		}
	}, [timeTrash.current])

	return (
		<>
			<h1>로또 추천 번호!</h1>
			{showNumber.map((number) => <Ball key={number} number={number} />)}
			{
				redo ?
					<>
						<h3>보너스 넘버!</h3>
						<Ball key={bonusNumber} number={bonusNumber} />
						<button onClick={handleClick}>다시 추천해주세요</button>
					</>
					:
					null
			}
		</>
	)
}

export default LottoFunction;