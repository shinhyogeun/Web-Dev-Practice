export function changeInput(placeholder, value) {
  return {
    type: "changeInput",
    payload: { placeholder, value }
  };
}

export function makeTable() {
  return {
    type: "click"
  };
}