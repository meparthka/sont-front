import React, { useState } from "react"
import { BiX } from "react-icons/bi"

const NotificationProvider = ({ children }) => {


  let [notify, setNotify] = useState([]);

  const removeNotify = (e) => {
    let n = e.target.parentElement;
    while (n.className != "notify-con") {
      n = n.parentElement;
    };
    n.className += " notify-remove"
    setTimeout(() => {
      n.remove()
    }, 500)
  }

  const addNotification = () => {
    let notiftCon = (
      <div className="notify-con">
        <div className="notify-bar">

        </div>
        <div className="notify-text">
          <h1>Helol</h1>
          <h1>Helol</h1>
          <h1>Helol</h1>
          Hello, World!
        </div>
        <button className="btn btn-def btn-dark" onClick={removeNotify}>
          <BiX />
        </button>
      </div>
    );
    setNotify([...notify, notiftCon]);
  }

  return (
    <div>
      <button onClick={addNotification}>He</button>
      {children}
      <div className="notify">
        {(() => {
          return notify
        })()}
      </div>
    </div>
  )
}

export default NotificationProvider