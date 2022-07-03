import React from "react"

const InputBox = (q) => {
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
      <input type={q.type || "text"} className="m-0" placeholder={q.place} />
    </div>
  )
}

export default InputBox