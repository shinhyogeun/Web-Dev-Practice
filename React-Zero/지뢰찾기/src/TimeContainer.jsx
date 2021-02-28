import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateTime } from './actions';

export default function TimeContainer() {
  // const times = useRef();
  const dispatch = useDispatch();
  // const { halted, time } = useSelector((state) => ({
  //   halted: state.halted,
  //   time: state.time,
  // }))

  useEffect(() => {
    // if (!halted) {
    //   times.current = setInterval(() => { dispatch() }, 1000);
    //   return;
    // }
    dispatch()
    // return clearInterval(cleartimes.current);
  }, [])

  return (
    <h3>time</h3>
  )
};