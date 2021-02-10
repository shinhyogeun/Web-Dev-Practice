import React, { useState, memo, useRef } from "react";
import Recode from './recode';

const makeNumber = (numberArray = []) => {
  const randomNumber = Math.ceil(Math.random() * 9);

  if (numberArray.length === 4) {
    return Number(numberArray.join(''));
  }

  if (!numberArray.includes(randomNumber)) {
    return makeNumber([...numberArray, randomNumber]);
  }

  return makeNumber(numberArray);
};

function NumberBaseball() {

  const [state, setState] = useState({
    answer: makeNumber(),
    input: "",
    result: "",
    recode: [],
  })

  const { answer, input, result, recode } = state;
  const inputRef = useRef();

  const handleChange = (e) => {
    setState({
      ...state,
      input: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isCorrect(answer, input)) {
      setState((prevState) => {
        return (
          {
            ...prevState,
            result: "홈런!!!",
            input: "",
            answer: makeNumber(),
            recode: [],
          }
        )
      })
      return inputRef.current.focus();
    }
    if (recode.length === 9) {
      setState({
        ...state,
        result: "10번의 기회에서도 못 맞추다니..",
        answer: makeNumber(),
        input: "",
        recode: []
      })
      return inputRef.current.focus();
    } else {
      console.log(answer)
      setState((preveState) => {
        return (
          {
            ...preveState,
            input: "",
            recode: [...preveState.recode, compare(preveState.answer, preveState.input)]
          }
        )
      })
    }
  }

  const isCorrect = (answer, input) => {
    return answer === Number(input)
  };

  const compare = (answer, input, index = 0, recode = [0, 0]) => {
    if (String(answer).length === index) {
      return `${recode[0]}스트라이크 ${recode[1]}볼`;
    }

    if (String(answer)[index] === input[index]) {
      recode[0] += 1
      return compare(answer, input, index + 1, recode);
    }

    if (String(answer).includes(input[index])) {
      recode[1] += 1
      return compare(answer, input, index + 1, recode);
    }

    return compare(answer, input, index + 1, recode);
  }

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={(e) => handleClick(e)}>
        <input ref={inputRef} value={input} onChange={(e) => handleChange(e)} />
        <button>입력!</button>
      </form>
      <ol>
        {recode.map((oneRecode, index) => <Recode key={oneRecode + index} oneRecode={oneRecode} />)}
      </ol>
    </>
  );
}

export default memo(NumberBaseball);