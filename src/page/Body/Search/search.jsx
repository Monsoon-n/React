import React from "react";
import "./search.css";
import { Input, Space } from "antd";
import { AudioOutlined, CameraOutlined } from "@ant-design/icons";
const { Search } = Input;
function MySearch() {
  const suffix = <AudioOutlined />;
  const camera = <CameraOutlined />;
  // const photo = <CameraOutlined style={{ fontSize: 16, color: "#fff" }} />;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <div className="pic-div">
        <img
          className="pic"
          src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
          alt=""
        />
      </div>
      <div className="input-div">
        <Space direction="vertical">
          <Search
            placeholder=""
            enterButton="百度一下"
            size="large"
            suffix={((<AudioOutlined />), (<CameraOutlined />))}
            onSearch={onSearch}
          />
        </Space>
      </div>
    </div>
  );
}

export default MySearch;
