import React from 'react';

export default function Input({ rowValue, colValue, mineCount, onChange, onClick }) {
  return (
    <div>
      <input name='row' placeholder='row' value={rowValue} onChange={onChange} />
      <input name='col' placeholder='col' value={colValue} onChange={onChange} />
      <input name='mineCount' placeholder='mineCount' value={mineCount} onChange={onChange} />
      <button onClick={onClick}>만들기</button>
    </div>
  )
}