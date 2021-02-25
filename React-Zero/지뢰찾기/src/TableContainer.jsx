import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';

export default function TableContainer() {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => ({
    tableData: state.tableData,
  }))

  function handleClickCell(row, col) {
    dispatch({ type: 'clickCell', payload: { row, col } })
  }

  return (
    <Table
      tableData={tableData}
      handleClick={handleClickCell}
    />
  )
}