import React from "react";
import "./Calculator.css";
function Calculator({ value1, value2, operator, result }) {
  const defaultoption = "+";
  operator = defaultoption;
  function Input() {
    return (
      <input
        type="text"
        className="Num1"
        onChange={(e) => {
          value1 = e.target.value;
          console.log(value1);
        }}
      />
    );
  }
  function Input2() {
    return (
      <input
        type="text"
        className="Num2"
        onChange={(e) => {
          value2 = e.target.value;
          console.log(value2);
        }}
      />
    );
  }
  // function Input3() {
  //   return <input type="text" className="Result" value={result} />;
  // }
  const equal = (e) => {
    e.preventDefault();
    if (operator === "+") result = Number(value1) + Number(value2);
    if (operator === "-") result = Number(value1) - Number(value2);
    if (operator === "*") result = Number(value1) * Number(value2);
    if (operator === "/" && Number(value2) !== 0)
      result = Number(value1) / Number(value2);
    if (operator === "/" && Number(value2) === 0) alert("sb");
    console.log(result);
  };
  return (
    <div>
      <Input />
      <select
        defaultValue={defaultoption}
        className="Operator"
        onChange={(e) => (operator = e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <Input2 />
      <button className="Equal" onClick={equal}>
        =
      </button>
      <input type="text" className="Result" value={result} />
    </div>
  );
}

export default Calculator;
