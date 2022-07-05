import React from "react"
import { useSelector } from 'react-redux'
const NotificationProvider = ({ children }) => {

  const notify = useSelector(state => state.notify.value)

  return (
    <div>
      {children}
      <div className="notify">
        {(() => {
          return notify
        })()}
      </div>
    </div>
  )
}

export { NotificationProvider }