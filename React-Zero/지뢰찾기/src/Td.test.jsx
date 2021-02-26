import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { CELL } from './reducer';

import Td from './Td';

describe('Cell은', () => {
  const handleClick = jest.fn();
  const handleRightClick = jest.fn();

  const tableRow = document.createElement('tr');

  it('클릭하면 handleClick함수가 실행된다..', () => {
    const { container } = render(<Td
      row={3}
      col={3}
      value={0}
      onClick={handleClick}
    />, {
      container: document.body.appendChild(tableRow)
    })

    expect(handleClick).not.toBeCalled();
    fireEvent.click(container.querySelector("td"));
    expect(handleClick).toBeCalled();
  });

  it('오른쪽 마우스 클릭하면 handleRightClick이 실행된다..', () => {
    const { container } = render(<Td
      row={3}
      col={3}
      value={0}
      onClick={handleClick}
      onContextMenu={handleRightClick}
    />, {
      container: document.body.appendChild(tableRow)
    })

    fireEvent.contextMenu(container.querySelector("td"))

    expect(handleRightClick).toBeCalled();
  });

  it('지뢰이든 지뢰가 아니든 일단은 내용을 보여주지 않는다.', () => {
    const { container } = render(<Td
      row={3}
      col={3}
      value={-6}
      onClick={handleClick}
    />, {
      container: document.body.appendChild(tableRow)
    })

    expect(container.querySelector("td").innerHTML).toBe('');
  })

  it('궁금한 칸이면 ?를 보여준다.', () => {
    const { container } = render(<Td
      row={3}
      col={3}
      value={CELL.NORMAL_QUATIONS}
      onClick={handleClick}
    />, {
      container: document.body.appendChild(tableRow)
    })

    expect(container.querySelector("td").innerHTML).toBe('?');
  })

  it('확실한 칸이면 !를 보여준다.', () => {
    const { container } = render(<Td
      row={3}
      col={3}
      value={CELL.MINE_FLAG}
      onClick={handleClick}
    />, {
      container: document.body.appendChild(tableRow)
    })

    expect(container.querySelector("td").innerHTML).toBe('!');
  })
})