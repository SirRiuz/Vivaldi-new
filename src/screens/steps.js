


import { useContext, useEffect, useState } from "react"
import AplicationContext from "../context/Aplication"
import { getSteeps } from "../services/steps"
import '../styles/steps.css'
import ReactLoading from 'react-loading';




function Steps(props) {

  var renderSteps = null
  var Latex = require('react-latex')

  const { context } = useContext(AplicationContext)
  const [ data,setData ] = useState(null)
  const [ isError,setError ] = useState(false)


  useEffect(() =>{
    getSteeps({ latex:context.screen.params.latex })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.status === 'ok' && data === null){
        setData(() => res)
      }
    })
    .catch(err => { 
      setError(() => true)
    })  
  },[])

  

  if(isError){
    return (
      <div className={'loader'}>
        <p>Errror de conexion</p>
      </div>
    )
  }

  if(data !== null) {
    renderSteps = data.steps.map((x,k) => (
      <div key={k} className={'step-item'}>
        <h1></h1>
        <Latex>{`$${x.result}$`}</Latex>
        {(x.isExpand) ? (
          <div className={'expand-text'}><Latex>{`$${x.expandText}$`}</Latex></div>
        ):null}
      </div>
    ))
  }


  if(data === null){
    return (
      <div className={'loader'}>
        <ReactLoading type={'spokes'} color={'black'} height={25} width={25} />
      </div>
    )
  }

  return(
    <div className={'steps'}>
      {(data !== null) ? 
        (<div style={{ marginBottom:'50px' }}>
          <Latex>{`$${data.input}$`}</Latex>
        </div>):null
      }
      { renderSteps }
    </div>
  )
}


export default Steps



