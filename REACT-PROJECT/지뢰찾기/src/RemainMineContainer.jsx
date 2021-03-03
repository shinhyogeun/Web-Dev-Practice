import React from 'react'

import { useSelector } from 'react-redux';

import RemainMine from './RemainMine';

export default function RemainMineContainer() {
  const { remainMine } = useSelector(({ remainMine }) => ({ remainMine }));

  return <RemainMine remainMine={remainMine} />;
}
