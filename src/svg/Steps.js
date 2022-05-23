import * as React from "react"

const Steps = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={17.5} cy={17.5} r={5.083} stroke="#000" strokeWidth={1.5} />
    <path
      d="M30.625 17.5S29.167 5.833 17.5 5.833 4.375 17.5 4.375 17.5"
      stroke="#000"
      strokeWidth={1.5}
    />
  </svg>
)

export default Steps
