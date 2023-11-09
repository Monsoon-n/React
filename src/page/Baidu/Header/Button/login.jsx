import React from "react";
import { Button, Flex } from "antd";
import "./login.css";
function Login() {
  function Show() {}
  return (
    <div className="login">
      <Flex gap="small" wrap="wrap">
        <Button type="primary">登录</Button>
      </Flex>
    </div>
  );
}

export default Login;
