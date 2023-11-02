import React, { useState } from "react";
import "./Calculator.css";
function Final({ which, result }) {
  return (
    <div>
      {which}: {result}
    </div>
  );
}
function Calculator1({ which, result, setResult }) {
  const [operator, setOperator] = useState("+");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  // console.log(which);

  const equal = () => {
    console.log(which);
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
  };

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
    </div>
  );
}
function Calculator() {
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const which1 = "一号";
  const which2 = "二号";
  return (
    <div>
      <Calculator1 which={which1} result={result1} setResult={setResult1} />
      <Calculator1 which={which2} result={result2} setResult={setResult2} />
      <Final which={which1} result={result1} />
      <Final which={which2} result={result2} />
    </div>
  );
}
export default Calculator;
