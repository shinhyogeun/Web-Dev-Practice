import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RemainMineContainer from './RemainMineContainer';

jest.mock('react-redux');

describe('RemainMineContainer', () => {
  useSelector.mockImplementation(selector => selector({
    remainMine: 10
  }));

  it('지뢰를 가져와서 보여준다.', () => {
    const { queryByText } = render(<RemainMineContainer />);

    expect(queryByText(/10/)).toBeInTheDocument();
  });
});