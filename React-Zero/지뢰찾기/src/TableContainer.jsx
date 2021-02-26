import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';

import { clickCell, clickRight } from './actions';

export default function TableContainer() {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => ({
    tableData: state.tableData,
  }))
  console.log(tableData)

  function handleClickCell(row, col) {
    dispatch(clickCell(row, col));
  }

  function handleRightClick(row, col) {
    dispatch(clickRight(row, col));
  }

  return (
    <Table
      tableData={tableData}
      handleClick={handleClickCell}
      handleRightClick={handleRightClick}
    />
  )
}