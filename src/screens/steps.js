


import { useCallback, useContext, useEffect, useState } from "react"
import AppBar from "../components/Appbar"
import StepItem from "../components/StepItem"
import AplicationContext from "../context/Aplication"
import { getSteeps } from "../services/steps"




function Steps(props) {

  var renderSteps = null
  var Latex = require('react-latex')

  const { context} = useContext(AplicationContext)
  const [ data,setData ] = useState(null)

  useEffect(() =>{
    getSteeps({ latex:context.screen.params.latex })
    .then(res => {
      console.log(res)
      if(res.status === 'ok' && data === null){
        setData(() => res)
      }
    })
    .catch(err => { })  
  },[])


  if(data !== null) {
    renderSteps = data.steps.map((x,k) => (
      <div key={k}>
        <h1></h1>
        <Latex>{`$${x.result}$`}</Latex>
        {(x.isExpand) ? (
          <div><Latex>{`$${x.expandText}$`}</Latex></div>
        ):null}
      </div>
    ))
  }

  return(
    <div>
      {(data !== null) ? 
        (<Latex>{`$${data.input}$`}</Latex>):null
      }
      { renderSteps }
    </div>
  )
}


export default Steps



