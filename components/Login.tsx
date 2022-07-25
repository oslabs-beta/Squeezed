import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to="/home">
            <button>Click me!</button>
            </Link>   
            <Link to="/signup">
            <button>Click me to go to Signup!</button>
            </Link>
        </div>
    )
}

export default Login