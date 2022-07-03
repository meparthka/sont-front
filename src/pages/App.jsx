import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./login"
import Home from "./home"
import NotFound from "./notfound"
import NotificationProvider from "../util/notification"

const adminApp = () => {
  return (
    <NotificationProvider>
      <div className="main-app">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </NotificationProvider>
  )
}

export default adminApp