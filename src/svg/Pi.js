import * as React from "react"

const Pi = (props) => (
  <svg
    width={11}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.793 9.14h1.468V1.3h3.542v5.714c0 1.573.615 2.197 2.004 2.197.36 0 .632-.053.782-.106V7.831c-.123.044-.37.07-.51.07-.545 0-.809-.29-.809-1.045V1.3H10.1V0H0v1.3h1.793v7.84Z"
      fill="#000"
    />
  </svg>
)

export default Pi
