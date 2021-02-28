import React from 'react';

export default function Input({ rowValue, colValue, mineCount, onChange, onClick }) {
  return (
    <div>
      <input
        type='number'
        name='row'
        placeholder='가로'
        value={rowValue}
        onChange={onChange}
      />
      <input
        type='number'
        name='col'
        placeholder='세로'
        value={colValue}
        onChange={onChange}
      />
      <input
        type='number'
        name='mine'
        placeholder='지뢰설치 갯수'
        value={mineCount}
        onChange={onChange}
      />
      <button
        onClick={onClick}>만들기</button>
    </div>
  )
}