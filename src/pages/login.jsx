import React from "react"
import Navbar from "../components/navbar"
import InputBox from "../components/inputbox"
import CheckBox from "../components/checkbox"
import { BiUser, BiLockAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux'
import { addNotify } from "../data/notify"

const Login = () => {

  const dispatch = useDispatch();
  
  const addNoti = () => {
    dispatch(addNotify(3000))
  }

  const addNoti2 = () => {
    dispatch(addNotify())
  }

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
              <InputBox icon={<BiUser />} place="Username" />
              <InputBox icon={<BiLockAlt />} place="Password" type="password" />
              <CheckBox lable="Remember Me." />
            </div>
            <button className="btn btn-primary a-right">Login</button>
          </form>
          <button onClick={addNoti}>TimeOut Notify</button>
          <button onClick={addNoti2}>Notify</button>
        </div>
      </div>
    </div>
  )
}

export default Login