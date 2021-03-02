import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateTime } from './actions';

export default function TimeContainer() {
  const times = useRef();
  const dispatch = useDispatch();
  const { halted, time } = useSelector((state) => ({
    halted: state.halted,
    time: state.time,
  }))

  useEffect(() => {
    if (times.current) {
      clearInterval(times.current);
    }

    if (halted === false) {
      times.current = setInterval(() => { dispatch(updateTime()) }, 1000);
      return;
    }

  }, [halted])

  return (
    <h3>{time}</h3>
  )
};