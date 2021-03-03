import React from 'react'

import { useSelector } from 'react-redux';

import SelectedMine from './SelectedMine';

export default function SelectedMineContainer() {
  const { selectedMine } = useSelector(({ selectedMine }) => ({ selectedMine }));

  return <SelectedMine selectedMine={selectedMine} />
}
