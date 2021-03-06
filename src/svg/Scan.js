import * as React from "react"

const Scan = (props) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.375 14.37a2.704 2.704 0 0 1 2.704-2.703c1.024 0 1.96-.579 2.418-1.495l1.197-2.394c.407-.814.61-1.22.94-1.49a2 2 0 0 1 .453-.28c.39-.175.844-.175 1.754-.175h7.318c.91 0 1.365 0 1.754.174a2 2 0 0 1 .453.28c.33.27.533.677.94 1.49l1.197 2.395a2.704 2.704 0 0 0 2.418 1.495 2.704 2.704 0 0 1 2.704 2.704v8.796c0 2.828 0 4.242-.879 5.121-.878.879-2.293.879-5.121.879h-14.25c-2.828 0-4.243 0-5.121-.879-.879-.879-.879-2.293-.879-5.121V14.37Z"
      stroke="#000"
      strokeWidth={1.5}
    />
    <path
      d="M22.583 18.958a5.083 5.083 0 1 1-10.166 0 5.083 5.083 0 0 1 10.166 0Z"
      stroke="#000"
      strokeWidth={1.5}
    />
  </svg>
)

export default Scan
