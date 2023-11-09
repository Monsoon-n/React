const initState = {
  value1: 0,
  value2: 0,
  result: 0,
};

export const calculatorReducer = (state = initState, action) => {
  switch (action.type) {
    case "input_value1":
      return { value1: action.value };
    case "input_value2":
      return { value2: action.value };
    case "+":
      return { value: state.value + 1 };
    case "-":
      return { value: state.value - 1 };
    case "*":
      return { value: state.value - 1 };
    case "/":
      return { value: state.value - 1 };
    default:
      return state;
  }
};
// const equal = () => {
//   console.log(which);
//   if (operator === "+") {
//     setResult(() => Number(value1) + Number(value2));
//   }
//   if (operator === "-") {
//     setResult(() => Number(value1) - Number(value2));
//   }
//   if (operator === "*") {
//     setResult(() => Number(value1) * Number(value2));
//   }
//   if (operator === "/" && Number(value2) !== 0) {
//     setResult(() => Number(value1) / Number(value2));
//   }
//   if (operator === "/" && Number(value2) === 0) {
//     alert("sb");
//   }
// };
