import React, { useState } from "react"

const InputBox = (q) => {
  return (
    <div className={"input-box" + (q.icon ? "-alt" : "") + (q.className ? (" " + q.className) : "") + (q.error ? " input-error" : "")}>
      <div className="input-input-box">
        {(() => {
          if (q.icon)
            return (
              <div className="text">
                {q.icon}
              </div>
            )
        })()}
        <input type={q.type || "text"} name={q.name} id={q.id} onChange={q.onChange} value={q.value} className="m-0" placeholder={q.place} />
      </div>
      <span className="input-error">{q.error}</span>
    </div>
  )
}

export default InputBox