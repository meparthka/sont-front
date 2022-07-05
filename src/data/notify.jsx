import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { BiX } from "react-icons/bi"

const removeNotify = (e) => {
  let n = e.target.parentElement;
  while (n.className !== "notify-con") {
    n = n.parentElement;
  };
  n.className += " notify-remove"
  setTimeout(() => {
    n.remove()
  }, 500)
}

const removeNotifyTimeOut = (t, id) => {
  let notifys = document.getElementsByClassName("notify")[0].childNodes
  setTimeout(() => {
    notifys.forEach(element => {
      let n = element;
      if (n.getAttribute("notifyid") === String(id)) {
        n.className += " notify-remove"
        setTimeout(() => {
          n.remove()
        }, 450)
      };
    });
  }, t);
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState: {
    value: [],
    count: 0
  },
  reducers: {
    addNotify: (state, e) => {
      if (e) {
        if (e.payload.timeOut)
          removeNotifyTimeOut(e.payload.timeOut, state.count)
      }

      state.value.push(
        <div className="notify-con" notifyid={state.count} >
          <div className="notify-bar">

          </div>
          <div className="notify-text">
            <h1>Hello, Computer!</h1>
            <h1>Helol</h1>
            <h1>Helol</h1>
            Hello, {state.count}!
          </div>
          <button className="btn btn-def btn-dark" onClick={removeNotify} >
            <BiX />
          </button>
        </div>
      )
      state.count++;
    },

  }
})

const removeAllNotify = (state) => {
  let notifys = document.getElementsByClassName("notify")[0].childNodes
  notifys.forEach(element => {
    let n = element;
    n.className += " notify-remove"
    setTimeout(() => {
      n.remove()
    }, 450)
  });
}

export const { addNotify } = notifySlice.actions
export { removeAllNotify };
export default notifySlice.reducer
