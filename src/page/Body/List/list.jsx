import React from "react";
import "./list.css";
import { RightOutlined, SyncOutlined } from "@ant-design/icons";
import { useState } from "react";
function List() {
  const list = [
    {
      key: "0",
      value: "继续实施一带一路科技创新行动计划",
    },
    {
      key: "1",
      value: "取已故亲人600元存款花800元开证明",
    },
    {
      key: "2",
      value: "学生称被蜜雪冰城店主3岁儿子骚扰",
    },
    {
      key: "3",
      value: "全球共赴东方之约",
    },
    {
      key: "4",
      value: "小伙在自家厕所里建海洋馆隐居6年",
    },
    {
      key: "5",
      value: "全村唯一拥有电话手表的小狗",
    },
    {
      key: "6",
      value: "外卖深夜千元牛杂汤疑为非法服务",
    },
    {
      key: "7",
      value: "网红铁头向东方甄选道歉",
    },
    {
      key: "8",
      value: "天然气爆炸致多人死亡？谣言！",
    },
    {
      key: "9",
      value: "黄晓明被说油的那阵赶上沈腾上网了",
    },
    {
      key: "10",
      value: "广东4个世仇村解除百年不通婚旧约",
    },
    {
      key: "11",
      value: "迪丽热巴ELLE盛典造型引争议",
    },
    {
      key: "12",
      value: "昆明两名环卫工人在垃圾站身亡",
    },
    {
      key: "13",
      value: "王俊凯问校门口的大哥还认不认得他",
    },
    {
      key: "14",
      value: "被要求加3万彩礼退婚当事人回应恶评",
    },
    {
      key: "15",
      value: "6名在菲被绑架中国公民仍下落不明",
    },
    {
      key: "16",
      value: "男子登顶珠峰后被向导抛弃险遇难",
    },
    {
      key: "17",
      value: "男子在药店和街头暴打女子",
    },
  ];
  const [index, Changeindex] = useState(0);
  if (index >= 17) Changeindex(0);

  const [page, setPage] = useState(1)
  return (
    <div className="list">
      <div className="list-header">
        <div className="button1">
          <b>百度热搜</b>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div className="button2">
          <div className="icon">
            <SyncOutlined />
          </div>
          <button className="change" onClick={() => setPage(page + 1 > 3 ? 1 : page + 1)}>
            换一换
          </button>
        </div>
      </div>
      <div className="list-body">
        {/* <div className="list-body1">
          {list
            .filter((item) => item.key <= index + 2 && item.key >= index)
            .map((item) => (
              <div className={item.key} key={item.key}>
                {item.key}
                {"  "}
                {item.value}
              </div>
            ))}
        </div>
        <div className="list-body2">
          {list
            .filter((item) => item.key <= index + 5 && item.key > index + 2)
            .map((item) => (
              <div className={item.key} key={item.key}>
                {item.key} {item.value}
              </div>
            ))}
        </div> */}
        {list.filter((item, index) => index >= (page - 1) * 6 && index < page * 6).map((item) => (
          <div className={`${item.key} list-item`} key={item.key}>
            {item.key}
            {"  "}
            {item.value}
          </div>
        ))}

      </div>
    </div>
  );
}

export default List;
