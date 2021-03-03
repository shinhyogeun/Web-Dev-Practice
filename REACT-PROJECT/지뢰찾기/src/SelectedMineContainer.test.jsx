import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import SelectedMineContainer from './SelectedMineContainer';

jest.mock('react-redux');

describe('selectedMineContainer', () => {
  useSelector.mockImplementation(selector => selector({
    selectedMine: 10
  }));

  it('지뢰를 가져와서 보여준다.', () => {
    const { queryByText } = render(<SelectedMineContainer />);

    expect(queryByText(/10/)).toBeInTheDocument();
  });
});