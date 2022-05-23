import * as React from "react"

const Sum = (props) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 7v1H8v7H7V8H0V7h7V0h1v7h7Z" fill="#000" />
  </svg>
)

export default Sum
