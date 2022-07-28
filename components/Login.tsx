import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'
// import img from ''

const Login = () => {


    return (
      <div id='outerBox'>
      <div id='loginBox'> 
      <img src="../static/images/Finallogo.png"></img>
        <label><strong>Log In</strong><br/><br/></label>
        <form method='POST' action='/api/login'>
          <input type="text" placeholder="Username" name="username" required></input> 
          <input type="password" placeholder="Password" name="password"required></input>
          <button type="submit" id='loginlink'>Login</button>
        </form>
        {/* <Link to='/app'>
            <button>Login</button>
        </Link> */}
        <Link to='/signup' id='signuplink'>
            <p>Sign up?</p>
        </Link>
      </div>
      </div>
    );
}

export default Login