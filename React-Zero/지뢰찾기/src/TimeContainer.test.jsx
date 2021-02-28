import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import TimeContainer from './TimeContainer';

import { render } from 'react-dom';

jest.mock('react-redux');

describe('TimeContainer', () => {

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    halted: given.halted,
    time: 0,
  }))

  context('halted가 false라면', () => {
    given('halted', () => false);
    it('그려질 때 시간을 흘러가게하는 함수가 실행된다.', () => {
      render(<TimeContainer />)
      expect(dispatch).toBeCalled();
    });
  })
})