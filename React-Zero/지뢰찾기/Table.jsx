import React from 'react';

import Tr from './Tr';

export default function Table({ tableData, handleClick }) {
  return (
    <table>
      <tbody>
        {tableData.map((oneLine, index) => (
          <Tr
            key={String(oneLine.join('')) + String(index)}
            row={index}
            cols={oneLine}
            onClick={handleClick}
          />
        ))}
      </tbody>
    </table>
  )
}