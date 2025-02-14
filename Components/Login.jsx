import React,{useRef} from 'react'

const Login = () => {
    let name = useRef()
    let password = useRef()
    let navigate = usenavigate()
    let demo = () => {
      name.current.value === "admin" && password.current.value === "admin2123" ?
      navigate("/dashboard") : navigate("/error")
    }
  return (
    <div>
      <form action=''>
        name : <input type="" name="" id="" />
        <br />
        password : <input type="text" name="" id="" />
        <br />
        <button onClick={demo}>submit</button>      
        </form>
    </div>
  )
}

export default Login
