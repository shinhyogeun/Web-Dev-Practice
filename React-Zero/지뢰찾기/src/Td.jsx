import React from 'react';

export default function Td({ row, col, value, onClick }) {
  return <td onClick={() => onClick(row, col)}>{value}</td>
}
