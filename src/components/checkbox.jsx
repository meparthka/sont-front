import React, { useState } from "react"

const CheckBox = (q) => {
  return (
    <label class="check-box">
      <span>{q.lable}</span>
      <input type="checkbox" name={q.name} onChange={q.onChange} checked={q.checked} id={q.id} />
      <span class="checkmark"></span>
    </label>
  )
}

export default CheckBox