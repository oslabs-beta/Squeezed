import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'
import { useNavigate } from '../deps.tsx'


const Signup = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/');
  }

  const handleClick =  (e: any) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
      email: email
    }
  fetch('http://localhost:8080/account', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    })
    .then((data) => data.json())
    .then(data => {
      navigateToLogin();
      // console.log("I'm on the front end", data)
    })
    .catch((err) => console.log(err));
  }
    return (
        <div>
        <link rel={'stylesheet'} href={'./static/css/signup.css'} />
        
          <div className="signup"/>
            <div className="signup_box">
              <div className="left">
                <div className="contact">
                  <form method='POST'>
                    <h3>SIGN UP</h3>
                    <input type="text" placeholder="Email" name="email" onChange={(e: any )=> setEmail(e.target.value)} required></input>
                    <input type="text" placeholder="Username" name="username" onChange={(e: any )=> setUsername(e.target.value)} required></input>
                    <input type="password" placeholder="Password" name="password" onChange={(e:any) => setPassword(e.target.value)} required></input>
                    <button onClick={handleClick}className="submit">SIGN UP</button> 
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

