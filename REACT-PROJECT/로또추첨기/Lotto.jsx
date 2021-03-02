import React, { Component } from "react";
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

class Lotto extends Component {
	state = {
		lottoNumber: makeLottoNumber(),
		showNumber: [],
		bonusNumber: null,
		redo: false,
	}

	timeTrash = [];
	update = () => {
		const lottoNumber = this.state.lottoNumber

		for (let i = 0; i < 6; i++) {
			this.timeTrash.push(setTimeout(() => {
				this.setState({
					...this.state,
					showNumber: lottoNumber.slice(0, i + 1),
				})
			}, i * 1000))
		}

		this.timeTrash.push(setTimeout(() => {
			this.setState({
				...this.state,
				bonusNumber: lottoNumber.slice(6),
				redo: true,
			})
		}, 6000));
	}

	componentDidUpdate() {
		if (this.state.showNumber.length === 0) {
			this.update()
		}
	}

	componentDidMount() {
		this.update();
	}

	componentWillUnmount() {
		this.timeTrash.forEach((time) => {
			clearTimeout(time);
		})
	}

	handleClick = () => {
		this.setState({
			lottoNumber: makeLottoNumber(),
			showNumber: [],
			bonusNumber: null,
			redo: false,
		})
	}

	render() {
		const { showNumber, bonusNumber, redo } = this.state
		return (
			<>
				<h1>로또 추천 번호!</h1>
				{showNumber.map((number) => <Ball key={number} number={number}>{number}</Ball>)}
				{redo ?
					<>
						<h3>보너스 넘버!</h3>
						<Ball key={bonusNumber} number={bonusNumber}>{bonusNumber}</Ball>
						<button onClick={this.handleClick}>다시 추천해주세요</button>
					</>
					:
					null}
			</>
		)
	}
}

export default Lotto;