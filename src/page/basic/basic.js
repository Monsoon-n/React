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
        </div>
        <div className="Show">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Basic;
