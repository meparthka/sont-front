import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./login"
import Home from "./home"
import NotFound from "./notfound"
import store from '../data/store'
import { Provider } from 'react-redux'
import { NotificationProvider } from "../util/notification"
import AppX from "./x/X"

const adminApp = () => {
  return (
    <Provider store={store}>
      <NotificationProvider NotificationProvider >
        <div className="main-app">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/x" element={<AppX />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </NotificationProvider >
    </Provider>
  )
}

export default adminApp