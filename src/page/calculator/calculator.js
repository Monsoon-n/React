import React, { useState } from "react";
import "./Calculator.css";
function Calculator() {
  function Calculator1({ which }) {
    let value1, value2, operator;
    const [result, setResult] = useState();
    const defaultoption = "+";
    operator = defaultoption;
    const equal = () => {
      // if (operator === "+") result = Number(value1) + Number(value2);
      if (operator === "+") setResult(() => Number(value1) + Number(value2));
      if (operator === "-") result = Number(value1) - Number(value2);
      if (operator === "*") result = Number(value1) * Number(value2);
      if (operator === "/" && Number(value2) !== 0)
        result = Number(value1) / Number(value2);
      if (operator === "/" && Number(value2) === 0) alert("sb");
      console.log(which + result);
    };
    return (
      <div>
        <input
          type="text"
          className="Num1"
          onChange={(e) => {
            value1 = e.target.value;
          }}
        />
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
        <input
          type="text"
          className="Num2"
          onChange={(e) => {
            value2 = e.target.value;
          }}
        />
        <button className="Equal" onClick={equal}>
          =
        </button>
        <input type="text" className="Result" value={result} />
      </div>
    );
  }
  return (
    <div>
      <Calculator1 which={"一号"} />
      <Calculator1 which={"二号"} />
    </div>
  );
}
export default Calculator;
