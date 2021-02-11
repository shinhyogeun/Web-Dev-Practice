import React, { memo, useEffect } from "react";

const Ball = memo(({ number }) => {
	useEffect(() => { console.log('공이 렌더링 됨') })
	let style = {
		"backgroundColor": "purple",
		"display": "inline-block",
		"width": "50px",
		"height": "50px",
		"marginRight": "30px",
		"borderRadius": "50%",
		"textAlign": "center",
		"border": "1px solid black",
		"verticalAlign": "middle",
		"alignItems": "center",
		"fontSize": "30px",
		"lineHeight": "50px",
	};

	const changeColor = (number) => {
		if (number <= 10) {
			style = { ...style, "backgroundColor": "blue" }
		} else if (number <= 20) {
			style = { ...style, "backgroundColor": "green" }
		} else if (number <= 30) {
			style = { ...style, "backgroundColor": "yellow" }
		} else if (number <= 40) {
			style = { ...style, "backgroundColor": "red" }
		}
	}

	changeColor(number)

	return (
		<span style={style}>{number}</span>
	);

})


export default Ball