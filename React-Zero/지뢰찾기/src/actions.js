export function changeInput(placeholder, value) {
  return {
    type: "changeInput",
    payload: { placeholder, value }
  };
}

export function makeTable() {
  return {
    type: "makeTable"
  };
}

export function clickCell(row, col) {
  return {
    type: "clickCell",
    payload: {
      row,
      col,
    }
  }
}

export function clickRight(row, col) {
  return {
    type: "clickRight",
    payload: {
      row,
      col,
    }
  }
}