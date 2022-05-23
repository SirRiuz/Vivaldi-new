import * as React from "react"

const Point = (props) => (
  <svg
    width={2}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.293 1.707A1 1 0 1 0 1.707.293 1 1 0 0 0 .293 1.707Z"
      fill="#000"
    />
  </svg>
)

export default Point
