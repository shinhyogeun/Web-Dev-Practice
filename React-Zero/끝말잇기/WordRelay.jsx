const React = require('react');
const { useState, useRef } = React;

function WordRelay() {
    const [state, setState] = useState({
        word: "신효근",
        value: "",
        result: "",
    })
    const inputRef = useRef(null);

    const { word, value, result } = state;

    const handleChange = (e) => {
        setState({
            ...state,
            value: e.target.value,
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setState({
                ...state,
                word: value,
                value: "123",
                result: "딩동댕",
            });
            inputRef.current.focus();
        } else {
            setState({
                ...state,
                value: "",
                result: "땡",
            });
            inputRef.current.focus();
        }
    };

    return (
        <>
            <h1>끝말잇기 게임하자~~</h1>
            <p>{word}</p>
            <form onSubmit={(e) => handleClick(e)}>
                <input ref={inputRef} value={value} onChange={(e) => handleChange(e)} />
                <button type="submit">확인!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports = WordRelay;