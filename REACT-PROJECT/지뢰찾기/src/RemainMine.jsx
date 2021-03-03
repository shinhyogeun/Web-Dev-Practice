import React from 'react';

export default function RemainMine({ remainMine }) {
  if (remainMine !== null) {
    return <h3>! : {remainMine}개</h3>;
  }

  return <></>;
}