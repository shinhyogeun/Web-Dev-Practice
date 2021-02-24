import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();
  const { row, col, mine } = useSelector((state) => ({
    row: state.row,
    col: state.col,
    mine: state.mine,
  }))

  function handleChange(e) {
    dispatch({
      type: "changeInput",
      value: e.target.value
    })
  }

  function handleClick() {
    dispatch({ type: "click" })
  }

  return (
    <Input
      rowValue={row}
      colValue={col}
      mineCount={mine}
      onChange={handleChange}
      onClick={handleClick}
    />
  )
}