import React from 'react';

import Tr from './Tr';

export default function Table({ tableData, handleClick, handleRightClick }) {
  return (
    <table>
      <tbody>
        {tableData.map((oneLine, index) => (
          <Tr
            key={String(oneLine.join('')) + String(index)}
            row={index}
            cols={oneLine}
            onClick={handleClick}
            onContextMenu={handleRightClick}
          />
        ))}
      </tbody>
    </table>
  )
}