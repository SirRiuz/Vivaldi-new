import React from "react";
import Camera from "../components/Camera";
import FloatingPanel from "../components/FloatingPanel";
import { getLatexByImage } from "../services/scanner";




function Scanner(props) {

  var floatingPanel = null

  const [ snap,setSnap ] = React.useState(null)
  const [ isLoad,setLoad ] = React.useState(null)
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
        if(res.status == 'ok'){
          console.log(res.data)
        } else {
          console.log('LAtex error')
        }
      })
      .catch(err => {
        console.log('Server error')
      })

  })

  const onMove = React.useCallback((frame) => {
    frame.innerHTML = ''
    setLoad(() => null)
  })


  if(isLoad !== null) {
    floatingPanel = (<FloatingPanel result={isLoad}/>)
  }


  return (
    <div>
      {/* <Camera
        getSnap={getSnap}
      /> */}
      <Camera
        onMove={onMove}
        getSnap={getSnap}
      />
      { floatingPanel }
    </div>
  )
}



export default Scanner


