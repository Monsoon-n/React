import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate(); // hooks 只能写在组件第一层
  return (
    <div className="Login">
      <button onClick={() => navigate("/home")}>登 录</button>
      <button onClick={() => navigate("/home/1")}>登 录2</button>
      <button onClick={() => navigate("/a")}>登 录 3</button>
    </div>
  );
}
export default Login;
