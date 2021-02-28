import React from 'react';

import InputContainer from './InputContainer';
import TableContainer from './TableContainer';
import TimeContainer from './TimeContainer';
export default function MineFind() {
  return (
    <>
      <h1>지뢰를 찾아봅시다!</h1>
      <InputContainer />
      {/* <TimeContainer /> */}
      <TableContainer />
    </>
  );
}