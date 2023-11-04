import React from "react";
import "./banner.css";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const list = [
    {
      key: "/news",
      value: "新闻",
    },
    {
      key: "/map",
      value: "地图",
    },
    {
      key: "/bar",
      value: "贴吧",
    },
    {
      key: "/video",
      value: "视频",
    },
    {
      key: "/picture",
      value: "图片",
    },
    {
      key: "/cloud",
      value: "网盘",
    },
    {
      key: "/more",
      value: "更多",
    },
  ];
  return (
    <div className="Banner">
      {list.map((item) => (
        <div
          className={`item ${pathname.includes(item.key) ? "active" : ""}`}
          key={item.key}
          onClick={() => navigate(`${item.key}`)}
        >
          {item.value}
        </div>
      ))}
    </div>
  );
}
export default Banner;
