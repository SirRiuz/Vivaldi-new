import * as React from "react"

const CloseIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 6 6 18M6 6l12 12"
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
)

export default CloseIcon
