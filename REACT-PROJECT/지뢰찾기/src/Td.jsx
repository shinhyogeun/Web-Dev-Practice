import React from 'react';

import { CELL } from './clickEvent';

export default function Td({
  row,
  col,
  value,
  onClick,
  onContextMenu,
}) {

  function makeCSS(value) {
    if ([CELL.MINE, CELL.NORMAL].includes(value)) {
      return { 'backgroundColor': '#444' }
    };

    if ([CELL.MINE_FLAG, CELL.NORMAL_FLAG].includes(value)) {
      return { 'backgroundColor': 'red' }
    };

    if ([CELL.MINE_QUATIONS, CELL.NORMAL_QUATIONS].includes(value)) {
      return { 'backgroundColor': 'yellow' }
    }

    return
  }

  function makeInnerText(value) {
    if (CELL.MINE_OPENED === value) {
      return '펑!';
    }

    if ([CELL.NORMAL, CELL.MINE].includes(value)) {
      return '';
    }

    if ([CELL.MINE_FLAG, CELL.NORMAL_FLAG].includes(value)) {
      return '🏴‍☠️'
    };

    if ([CELL.MINE_QUATIONS, CELL.NORMAL_QUATIONS].includes(value)) {
      return '?'
    }

    // 열린 애들만 있어요!
    return value;
  }

  let right = false
  let left = false

  function checkNear(right, left) {
    if (right && left) {
      console.log("완성!")
    }
  }

  if (value >= 0) {
    return (
      <td
        id={String(row) + String(col)}
        style={makeCSS(value)}
        onContextMenu={(e) => {
          e.preventDefault();
          right = true;
          checkNear(right, left);
        }}
        onMouseDown={(e) => {
          if (!e.button) {
            left = true;
            checkNear(right, left);
          }
        }}
        onMouseUp={(e) => {
          left = false;
          right = false;
        }}
        onMouseLeave={(e) => {
          left = false;
          right = false;
        }}
      >
        {makeInnerText(value) === 0 ? '' : makeInnerText(value)}
      </td>
    );
  }

  return (
    <td
      id={String(row) + String(col)}
      style={makeCSS(value)}
      onClick={() => onClick(row, col)}
      onContextMenu={(e) => onContextMenu(e, row, col)}
    >
      {makeInnerText(value) === 0 ? '' : makeInnerText(value)}
    </td>
  )
}

// first of all let right, let left
// 오른쪽 클릭 (right 바꾸고 안에서)
// let 
