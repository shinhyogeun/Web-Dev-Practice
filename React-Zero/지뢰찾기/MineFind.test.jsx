import React from 'react';

import { render } from '@testing-library/react';

import MineFind from './MineFind'

describe('지뢰찾기에서', () => {
  it('지뢰찾기 제목을 보여준다.', () => {
    const { queryByText } = render(<MineFind />)

    expect(queryByText('지뢰를 찾아봅시다!')).toBeInTheDocument();
  });
})