import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Table from './Table';

import { clickCell, clickRight, endGame } from './actions';

function checkEnd(dispatch, table, mineCount) {
  const safeAreas = table.flat().length - mineCount
  let safeAreasCount = 0
  table.forEach(line => {
    line.forEach(cell => {
      if (cell >= 0) safeAreasCount += 1
    })
  });
  if (safeAreasCount === safeAreas) {
    dispatch(endGame());
  }
}

export default function TableContainer() {
  const dispatch = useDispatch();
  const { tableData, mine, halted } = useSelector((state) => ({
    tableData: state.tableData,
    halted: state.halted,
    mine: state.mine,
  }))

  useEffect(() => {
    if (tableData.length !== 0) checkEnd(dispatch, tableData, Number(mine));
    if (halted) alert('게임끝')
  }, [halted, tableData])

  function handleClickCell(row, col) {
    if (halted) return;

    dispatch(clickCell(row, col));
  }

  function handleRightClick(e, row, col) {
    e.preventDefault();
    if (halted) return;

    dispatch(clickRight(row, col));
  }

  return (
    <Table
      tableData={tableData}
      handleClick={handleClickCell}
      handleRightClick={handleRightClick}
    />
  )
};