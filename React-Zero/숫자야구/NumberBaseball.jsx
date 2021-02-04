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

  q
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