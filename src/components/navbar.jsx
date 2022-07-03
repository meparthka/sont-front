import React from "react"
import { Link } from "react-router-dom"

const Navbar = (p) => {
  return (
    <div className="container navbar mt-2 px-3">
      <div className="nav-logo">
        Slect
      </div>
      {(() => {
        if (!p.login)
          return (
            <div className="nav-link">
              <Link to="/login" className="btn btn-primary btn-com">Login</Link>
            </div>
          )
        else
          return (
            <div className="nav-link">
              <Link to="/" className="btn btn-def btn-com">Home</Link>
            </div>
          )
      })()}
    </div>
  )
}

export default Navbar