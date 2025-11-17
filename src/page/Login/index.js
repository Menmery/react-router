import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      Login
      {/* 声明式写法 */}
      <Link to='/article'>跳转到article</Link>
      {/* 命令式写法 */}
      <button onClick={() => navigate('/article')}>跳转到article</button>
    </div>
  )
}

export default Login