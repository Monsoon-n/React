import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  function Calculator1({ which }) {
    const [result, setResult] = useState("");
    const [operator, setOperator] = useState("+");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const equal = () => {
      if (operator === "+") {
        setResult(() => Number(value1) + Number(value2));
      }
      if (operator === "-") {
        setResult(() => Number(value1) - Number(value2));
      }
      if (operator === "*") {
        setResult(() => Number(value1) * Number(value2));
      }
      if (operator === "/" && Number(value2) !== 0) {
        setResult(() => Number(value1) / Number(value2));
      }
      if (operator === "/" && Number(value2) === 0) {
        alert("sb");
      }
      console.log(which + result);
    };
    function Final() {
      return <div>1号: {result}</div>;
    }
    return (
      <div>
        <input
          type="text"
          className="Num1"
          onChange={(e) => {
            setValue1(e.target.value);
          }}
        />
        <select
          className="Operator"
          onChange={(e) => setOperator(e.target.value)}
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
            setValue2(e.target.value);
          }}
        />
        <button className="Equal" onClick={equal}>
          =
        </button>
        <input type="text" className="Result" value={result} />
        <Final />
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
