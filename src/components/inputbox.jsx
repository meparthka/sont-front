import React, { useState } from "react"

const InputBox = (q) => {

  let [_inputValue, setInputValue] = useState("")

  const setValue = (e) => {
    setInputValue(e.target.value);

    if (q.setValues) {
      q.setValues({...q.values || {}, [q.name]: e.target.value})
    }
  }

  return (
    <div className={"input-box" + (q.icon ? "-alt" : "") + " " + q.className}>
      {(() => {
        if (q.icon)
          return (
            <div className="text">
              {q.icon}
            </div>
          )
      })()}
      <input type={q.type || "text"} name={q.name} onChange={setValue} className="m-0" placeholder={q.place} />
    </div>
  )
}

export default InputBox