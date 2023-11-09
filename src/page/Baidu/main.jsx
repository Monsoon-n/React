import React from "react";
import Header from "./Header/header";
import Body from "./Body/body";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";

function Main() {
  const { value } = useSelector((state) => state.calculatorReducer);

  const dispatch = useDispatch();

  return (
    <div className="Main">
      <Header />
      <Body />
      {value}
      <div onClick={() => dispatch({ type: "ADD" })}>+</div>
      <div onClick={() => dispatch({ type: "SUBTRACT" })}>-</div>
    </div>
  );
}

export default Main;
// 更改下拉列表的hover
// 搜索框覆盖
