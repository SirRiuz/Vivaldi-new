

import React from "react";
import Camera from "../components/Camera";
import FloatingPanel from "../components/FloatingPanel";
import { getLatexByImage } from "../services/scanner";



function Scanner(props) {

  const [ data,setData ] = React.useState(null)

  const getSnap = React.useCallback((snap,frame) => {

    frame.innerHTML = `
        <div class="demo-container">
          <div class="progress-bar">
            <div class="progress-bar-value"></div>
          </div>
        </div>
    `

    getLatexByImage({ baseCode:snap })
      .then(res => res.json())
      .then(res => {
        frame.innerHTML = ''
        setData(() => res)
      })
      .catch(err => {
        setData(() => undefined)
      })

  })

  const onMove = React.useCallback((frame) => {
    frame.innerHTML = ''
    setData(() => null)
  })


  const onClose = React.useCallback(() => {
    setData(() => null)
  })


  return (
    <div>
      <Camera
        onMove={onMove}
        getSnap={getSnap}
        onClose={onClose}
      />
      <FloatingPanel data={data}/>
    </div>
  )
}



export default Scanner
