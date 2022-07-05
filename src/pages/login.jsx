import React, { useState } from "react"
import Navbar from "../components/navbar"
import InputBox from "../components/inputbox"
import CheckBox from "../components/checkbox"
import { BiUser, BiLockAlt } from "react-icons/bi";

const Login = () => {

  let [loginValue, setLoginValues] = useState({})

  return (
    <div>
      <Navbar login={true} />
      <div className="container px-3 d-flex mt-l">
        <div className="mx-auto login-box form">
          <div className="title">
            <span className="">Login</span>
          </div>
          <form className="form">
            <div className="overlay d-none">
              <div>
                <div class="loader"></div>
              </div>
            </div>
            <div className="inputs">
              <InputBox icon={<BiUser />} name="username" values={loginValue} setValues={setLoginValues} place="Username" />
              <InputBox icon={<BiLockAlt />} name="password" values={loginValue} setValues={setLoginValues} place="Password" type="password" />
              <CheckBox lable="Remember Me." name="remember" values={loginValue} setValues={setLoginValues} />            </div>
            <button className="btn btn-primary a-right">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login