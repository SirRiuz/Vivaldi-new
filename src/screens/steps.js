


import { useCallback, useEffect, useState } from "react"
import AppBar from "../components/Appbar"
import StepItem from "../components/StepItem"
import { getSteeps } from "../services/steps"


function Steps(props) {

  var [ steps,setSteps ] = useState(null)
  var renderSteps = null
  const getStepsData = useCallback(() => {
    getSteeps().then(res => {
      if(res.status === 'ok'){
        setSteps(steps=res.steps)
      }
    })
  },[])


  useEffect(() => {
    if(steps === null) {
      getStepsData()
    }
  },[])


  if(steps !== null) {
    console.log(steps)
    renderSteps = steps.map((x,k) => (
      <StepItem data={x} key={k}/>
    ))
  }



  return(
    <div>
      <AppBar/>
      { renderSteps }
    </div>
  )
}


export default Steps