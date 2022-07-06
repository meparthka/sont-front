import React, { useState } from "react"
import Navbar from "../components/navbar"
import InputBox from "../components/inputbox"
import CheckBox from "../components/checkbox"
import { BiUser, BiLockAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addNotify, removeAllNotify } from "../data/notify"

const Login = () => {

  /* Login Data */
  let [loginValue, setLoginValues] = useState({
    username: "",
    password: "",
    remember: false
  })
  let [loginError, setLoginError] = useState({})

  let dispatch = useDispatch()

  /* Set login form value */
  const setLoginFormValue = (e) => {
    setLoginValues({
      ...loginValue,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    })
  }

  /* Try Login */
  const tryLogin = (d) => {
    let loginButton = document.getElementById("login_button") // login button
    let loginOver = document.getElementById("login_overlay").classList // login overlay

    loginOver.remove("d-none") // show login overlay
    removeAllNotify() // remove all notification

    console.log(d);

    setTimeout(() => {
      if (d.username === "password" && d.password === "username") {
        // if username and password valid
        loginOver.add("d-none") // remove overlay
        loginButton.removeAttribute("disabled") // login button enable
      } else {
        // if username or password not valid
        setLoginValues({
          ...loginValue,
          password: ""
        })
        dispatch(addNotify({})) // show invalid usename notification
        loginOver.add("d-none") // remove overlay
        loginButton.removeAttribute("disabled") // login button enable
      }
    }, 1000)
  }

  /* Try valid form, if form is not valid than show error else tryLogin  */
  const tryValid = (e) => {
    e.preventDefault()
    let loginButton = document.getElementById("login_button") // login button
    setLoginError({}) // clear all error

    loginButton.setAttribute("disabled", "") // login button disabled 

    let usernameError, passwordError;

    if (loginValue.username === "") {
      usernameError = "Please Enter Username"
    }

    if (loginValue.password === "") {
      passwordError = "Please Enter Password"
    }

    setTimeout(() => {
      if (usernameError || passwordError) { // if not Valid
        setLoginError({
          username: usernameError,
          password: passwordError
        })
        loginButton.removeAttribute("disabled") // login button enable
      } else { // If Valid
        loginButton.removeAttribute("disabled") // login button enable
        tryLogin(loginValue)
      }
    }, 500)

  }

  return (
    <div>
      <Navbar login={true} />
      <div className="container px-3 d-flex mt-l">
        <div className="mx-auto login-box form">
          <div className="title">
            <span className="">Login</span>
          </div>
          <form onSubmit={tryValid} className="form">
            <div className="overlay d-none" id="login_overlay"> {/* Login Overlay */}
              <div>
                <div class="loader"></div>
              </div>
            </div>
            <div className="inputs">
              <InputBox icon={<BiUser />} name="username" value={loginValue.username} onChange={setLoginFormValue} error={loginError.username} place="Username" />
              <InputBox icon={<BiLockAlt />} name="password" value={loginValue.password} onChange={setLoginFormValue} error={loginError.password} place="Password" type="password" />
              <CheckBox lable="Remember Me." name="remember" value={loginValue.remember} onChange={setLoginFormValue} />
            </div>
            <button id="login_button" className="btn btn-primary a-right">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login