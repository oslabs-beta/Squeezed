import { React, Link, useNavigate } from '../deps.tsx';

const Login = () => {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  //navigates to /home
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/home')
  }

  const handleClick =  (e: any) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password
    }
   
    fetch('http://localhost:8080/login',{
      method: 'POST',
      headers: {
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify(body),
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.result === true) {
        // stores userId and jwt token in session storage
        sessionStorage.setItem("userId", data.userId);        
        sessionStorage.setItem("Authorization", data.token);        
        navigateToHome();
      } else {
        alert('Wrong username and password combination')
      }
    })
    .catch((error) => console.log(error))
  }

    return (
<div>
<link rel={'stylesheet'} href={'./static/css/login.css'} />

  <div className="login"/>
    <div className="login_box">
      <div className="left">
        <div className="contact">
          <form action='/login'>
            <h3>LOG IN</h3>
            <input 
              type="text" 
              placeholder="Username" 
              name="username" 
              onChange={(e:any) => setUsername(e.target.value)}
              required />
            <input type="password" placeholder="Password" name="password" onChange={(e: any )=> setPassword(e.target.value)} required></input>
            <button onClick={handleClick} className="submit">LOG IN</button> <br/>
           <Link to='/signup' id='signuplink'>
            <p>Need an account? Sign up!</p>
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
    );
  }
  
export default Login


 