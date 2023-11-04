import React from "react";
import "./header.css";
import Banner from "./Banner/banner";
import Option from "./Option/option";
import Button from "./Button/login";
import AI from "./AI/ai";

function Header() {
  // 下拉列表

  return (
    <div className="Header">
      <Banner />
      <div className="Right">
        <AI />
        <Option />
        <Button />
      </div>
    </div>
  );
}

export default Header;
