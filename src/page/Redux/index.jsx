import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Index() {
  let { value1, value2, result } = useSelector(
    (state) => state.calculatorReducer
  );
  const dispatch = useDispatch();
  // function Dispatch(e) {
  //   value = e.target.value;
  //   console.log(value);
  //   dispatch({ value, type: "" });
  // }
  console.log("value1 + " + value1);
  console.log("value2 + " + value2);
  console.log(result);
  // console.log(value2);
  return (
    <div>
      <input
        type="text"
        className="Num1"
        onChange={(e) =>
          dispatch({ value: e.target.value, type: "input_value1" })
        }
      />
      <select
        className="Operator"
        onChange={(e) => dispatch({ type: e.target.value })}
      >
        <option value={"~"}>~</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        className="Num2"
        onChange={(e) =>
          dispatch({ value: e.target.value, type: "input_value2" })
        }
      />
      <button
        className="Equal"
        onChange={(e) => dispatch({ value: e.target.value, type: "=" })}
      >
        =
      </button>
      <input type="text" className="Result" />
    </div>
  );
}

export default Index;
