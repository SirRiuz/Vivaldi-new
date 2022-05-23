import * as React from "react"

const Abs = (props) => (
  <svg
    width={25}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.1 3.087H6.922v9.178H16.1V3.087Z"
      stroke="#767676"
      strokeWidth={1.6}
      strokeLinejoin="round"
      strokeDasharray="1.67 0.5"
    />
    <path d="M1 .002v15.353M24.026 0v15.353" stroke="#000" strokeWidth={1.5} />
  </svg>
)

export default Abs
