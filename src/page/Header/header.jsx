import React, { useState } from "react";
import "./header.css";
import Banner from "./Banner/banner";
import Option from "./Option/option";
import Button from "./Button/login";
import AI from "./AI/ai";
import Login from "./Login";
import { Modal } from "antd";

function Header() {
  // 下拉列表

  const [open, setOpen] = useState(false)

  return (
    <div className="Header">
      <Banner />
      <div className="Right">
        <AI />
        <Option />
        <Button onOpen={() => setOpen(true)}/>
      </div>
      <Modal title="Basic Modal" open={open} onOk={() => console.log('onOk')} onCancel={() => setOpen(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      {/* {
        open ? <Login setOpen={setOpen}/> : null
      } */}
    </div>
  );
}

export default Header;
