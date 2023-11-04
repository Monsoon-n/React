import React from "react";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import "./option.css";
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "搜索设置",
    key: "1",
  },
  {
    label: "高级搜索",
    key: "2",
  },
  {
    label: "关闭预测",
    key: "3",
  },
  {
    label: "隐私设置",
    key: "4",
    danger: true,
  },
  {
    label: "关闭热搜",
    key: "5",
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
function Option() {
  return (
    <Space wrap>
      <Dropdown menu={menuProps} placement={"bottom"}>
        <Button>
          <Space>设置</Space>
        </Button>
      </Dropdown>
    </Space>
  );
}

export default Option;
