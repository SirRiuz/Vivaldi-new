import * as React from "react"

const Prod = (props) => (
  <svg
    width={22}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.291 21.583V11.014H0v10.569h1.318V12.2h5.655v9.382H8.29Z"
      fill="#000"
    />
    <path
      d="M7.058 1H1.225v5.833h5.833V1ZM7.058 25H1.225v5.833h5.833V25ZM21.558 11.666h-9.167v9.167h9.167v-9.167Z"
      stroke="#919191"
      strokeWidth={0.833}
      strokeLinejoin="round"
      strokeDasharray="1.67 0.5"
    />
  </svg>
)

export default Prod
