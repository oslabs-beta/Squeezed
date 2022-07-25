import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'

const Signup = () => {
    return (
        <div>
            <h1>Signup</h1>
            <Link to="/home">
            <button>Click me to go to App!</button>
            </Link>
            <Link to="/">
            <button>Click me to go to Login!</button>
            </Link>    
        </div>
    )
}

export default Signup