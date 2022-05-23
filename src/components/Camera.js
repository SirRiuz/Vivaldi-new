

import React from "react"
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import '../styles/camera.css'



function Camera(props) {

  var videoRef = React.createRef()
  var canvaRef = React.createRef()
  var cropRef = React.createRef()
  var renderComponent = null
  
  const [ snapImage,setSnap ] = React.useState(null)
  const start = React.useCallback(() => {
    if(props.onMove !== undefined){
      props.onMove(
        document.getElementsByClassName('cropper-face cropper-move')[0]
      )
    }
  })


  const onCrop = React.useCallback((e) => {
    const imageElement = cropRef.current
    const cropper = imageElement.cropper

    if(props.getSnap !== undefined) {
      props.getSnap(
        cropper.getCroppedCanvas().toDataURL(),
        document.getElementsByClassName('cropper-face cropper-move')[0]
      )
    }
  })

  const onSnap = React.useCallback(() => {
    canvaRef.current.width = videoRef.current.videoWidth
    canvaRef.current.height = videoRef.current.videoHeight
    canvaRef.current.getContext('2d').drawImage(
      videoRef.current,
      videoRef.current.width,
      videoRef.current.height
    )
    setSnap(() => canvaRef.current.toDataURL())
  })


  const getMediaData = React.useCallback(() => {
    const OPTIONS = { video:{ facingMode: 'environment' } }
    navigator.mediaDevices.getUserMedia(OPTIONS)
      .then(stream => {
        videoRef.current.srcObject = stream
        videoRef.current.onclick = () => {
        onSnap()
      }
    })
  })


  getMediaData()


  if(snapImage !== null) {
    renderComponent = (
      <Cropper
        id={'crop'}
        src={snapImage}
        style={{ height: '100vh', width: "100%" }}
        initialAspectRatio={NaN}
        dragMode={'crop'}
        guides={false}
        zoomOnTouch={false}
        zoomOnWheel={false}
        autoCrop={false}
        viewMode={3}
        cropend={onCrop}
        crop={start}
        ref={cropRef}
      />
    )
  } else {
    renderComponent = (
      <div>
        <video playsInline autoPlay ref={videoRef}></video>
        <canvas ref={canvaRef}></canvas>
      </div>
    )
  }


  return(
    <div>
      { renderComponent }
    </div>
  )


} 



export default Camera



