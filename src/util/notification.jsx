import React, { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addNotify } from '../data/notify'

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