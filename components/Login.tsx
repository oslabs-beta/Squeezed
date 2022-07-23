import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/home">
            <button>Click me!</button>
            </Link>   
        </div>
    )
}

export default Login