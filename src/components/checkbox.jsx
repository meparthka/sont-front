import React from "react"

const CheckBox = (q) => {
  return (
    <label class="check-box">
      <span>{q.lable}</span>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  )
}

export default CheckBox