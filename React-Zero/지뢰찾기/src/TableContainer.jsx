import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';

import { clickCell, clickRight } from './actions';

export default function TableContainer() {
  const dispatch = useDispatch();
  const { tableData, halted } = useSelector((state) => ({
    tableData: state.tableData,
    halted: state.halted,
  }))

  useEffect(() => {
    if (halted) alert('게임끝')
  }, [halted])

  function handleClickCell(row, col) {
    if (halted) return;

    dispatch(clickCell(row, col));
  }

  function handleRightClick(e, row, col) {
    if (halted) return;

    e.preventDefault();
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