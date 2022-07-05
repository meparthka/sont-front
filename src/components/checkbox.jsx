import React, { useState } from "react"

const CheckBox = (q) => {

  let [_inputValue, setInputValue] = useState("")

  const setValue = (e) => {
    setInputValue(e.target.checked);

    if (q.setValues) {
      q.setValues({ ...q.values || {}, [q.name]: e.target.checked })
    }
  }

  return (
    <label class="check-box" name={q.name} onChange={setValue}>
      <span>{q.lable}</span>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </label>
  )
}

export default CheckBox