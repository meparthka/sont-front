import React from "react"
import Navbar from "../components/navbar"
import { useDispatch } from 'react-redux'
import { addNotify } from "../data/notify"

const Home = () => {

  const dispatch = useDispatch();

  const addNoti = () => {
    dispatch(addNotify(10000))
  }

  const addNoti2 = () => {
    dispatch(addNotify())
  }

  return (
    <div>
      <Navbar />
      <div className="container px-3">
        <h1>Home</h1>
        <button onClick={addNoti}>TimeOut Notify</button>
        <button onClick={addNoti2}>Notify</button>
      </div>
    </div>
  )
}

export default Home