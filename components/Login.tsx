import { React } from '../deps.tsx';
import { Link } from '../deps.tsx'
import { useNavigate } from '../deps.tsx'

// import img from ''

// const useInput = (initial:any) => {
//   const [value, setValue] = React.useState(initial)
//   const onChange = (e:any) => {
//     setValue(e.target.value)
//   }
//   return [value, onChange]
// }

// what are u doing
// im trying to get this shit to work 
const Login = () => {
  const [username, usernameOnChange] = React.useState('')
  const [password, passwordOnChange] = React.useState('')

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('http://localhost:8000/home')
  }

  const handleClick =  (e: any) => {
    e.preventDefault()
    const body = {
      username: username,
      password: password
    }
    fetch('http://localhost:8080/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
      mode: 'no-cors',
    })
    .then((data) => {
      // console.log('res: ', data)
      return data.json();
    })
    .then((data) => {
      console.log('res on front end: ', data)
      if (data === true) {
        console.log(data)
        navigateToHome()
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
          <form method='POST' action='/login'>
            <h3>LOG IN</h3>
            <input type="text" placeholder="Username" name="username" required></input>
            <input type="password" placeholder="Password" name="password"required></input>
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


 