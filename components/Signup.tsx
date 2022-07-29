import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'

const Signup = () => {
    return (
        <div>
        <link rel={'stylesheet'} href={'./static/css/signup.css'} />
        
          <div className="signup"/>
            <div className="signup_box">
              <div className="left">
                <div className="contact">
                  <form method='POST'>
                    <h3>SIGN UP</h3>
                    <input type="text" placeholder="Email" name="email" required></input>
                    <input type="text" placeholder="Username" name="username" required></input>
                    <input type="password" placeholder="Password" name="password"required></input>
                    <Link to="/home">
                    <button className="submit">SIGN UP</button> </Link><br/>
                    

<Link to='/' id='loginlink'>
            <p>Have an account? Log in!</p>
            </Link> 
                  </form>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
        
                </div>
              </div>
            </div>
          </div>
    )
}

export default Signup

