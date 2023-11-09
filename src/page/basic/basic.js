import { useNavigate, Outlet } from "react-router-dom";
import "./Basic.css";
function Basic() {
  const navigate = useNavigate();
  return (
    <div className="Basic">
      <div className="Banner">ECO</div>
      <div className="Content">
        <div className="Nav">
          <div className="Home" onClick={() => navigate("/home")}>
            学校首页
          </div>
          <div className="Calculator" onClick={() => navigate("/calculator")}>
            计算器
          </div>
          <div className="Baidu" onClick={() => navigate("/baidu")}>
            百度
          </div>
          <div className="Redux" onClick={() => navigate("/redux")}>
            Redux
          </div>
          <div
            className="Redux-result"
            onClick={() => navigate("/reduxresult")}
          >
            Redux-r
          </div>
        </div>
        <div className="Show">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Basic;
