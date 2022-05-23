import * as React from "react"

const Fractions = (props) => (
  <svg
    width={34}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.182 11H1v11.622h11.182V11ZM29.667 1H18.485v11.622h11.182V1ZM29.667 20.44H18.485v11.622h11.182V20.44Z"
      stroke="#767676"
      strokeWidth={1.7}
      strokeLinejoin="round"
      strokeDasharray="1.67 0.5"
    />
    <path d="M14.317 16.108h19.518" stroke="#000" strokeWidth={1.001} />
  </svg>
)

export default Fractions
