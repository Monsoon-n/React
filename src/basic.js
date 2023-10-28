import { useNavigate, Outlet } from "react-router-dom";
import "./Css/Basic.css";
function Basic() {
  const navigate = useNavigate();
  return (
    <div className="Basic">
      <div className="Banner">ECO</div>
      <table className="Table">
        <tbody>
          <td>
            <tr className="Header" onClick={() => navigate("/home")}>
              学校首页
            </tr>
            <tr>课程中心</tr>
            <tr>课程管理</tr>
            <tr>教室管理</tr>
            <tr>学生管理</tr>
            <tr className="Header">存储管理</tr>
            <tr>数据概览</tr>
            <tr>学校资料</tr>
            <tr className="Header">教学管理</tr>
            <tr>直播回放</tr>
            <tr>教学数据</tr>
            <tr>作业管理</tr>
            <tr className="Header">财务中心</tr>
            <tr>财务总览</tr>
            <tr>订单明细</tr>
          </td>
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
export default Basic;
