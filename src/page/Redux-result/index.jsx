import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const { result } = useSelector((state) => state.calculatorReducer);
  return <div>{result}</div>;
}

export default Index;
