import React, { useState, uesRef } from "react";

export default function NumberBaseball() {
  const [state, setState] = useState({
    answer: 1231,
    input: "",
    result: "",
    recode: [],
  })

  const { answer, input, result, recode } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      input: e.target.value,
    });
  };

  const handleClick = () => {
    if (isCorrect(answer, input)) {
      setState({
        answer: makeNumber(),
        input: "",
        result: "홈런!",
        recode: []
      })
    } else {
      setState({
        ...state,
        input: "",
        result: compare(answer, input),
        recode: [...recode, result],
      })
    }
  }

  const makeNumber = () => {
    let numberArray = [];
    for (let i = 0; i < 10; i++) {
      console.log(numberArray)
      const number = Math.ceil(Math.random * 9);
      if (!numberArray.includes(number)) {
        numberArray.push(number);
      }
    }
    // while (numberArray.length < 4) {
    // }
    return numberArray.join(", ");
  }
  console.log(makeNumber())
  return (
    <>
      <p>{result}</p>
      <form onSubmit={handleClick}>
        <input value={input} onChange={handleChange} />
        <button>입력!</button>
      </form>
      <ol>
        {recode.map((oneRecode) => {
          <li></li>
        })}
      </ol>
    </>
  );
}