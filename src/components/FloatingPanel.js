

import { useCallback, useContext } from 'react'
import AplicationContext from '../context/Aplication'
import '../styles/floatingPanel.css'
import Steps from '../svg/Steps'



var Latex = require('react-latex')


function FloatingPanel(props) {

  var input = null
  var { context,setContext } = useContext(AplicationContext)

  const showSteps = useCallback(() => {
    var newContext = {
      screen:{
        title:'Paso a paso',
        to:'steps',
        showSteps:true,
        params:{
        latex:props.data.data.input
        }
      }
    }

    setContext(() => context = newContext)
  })

  if(props.data == null){ return }

  if(props.data.status == 'error') {

    var messege = (props.data.type === 'conexion-error') ? 
    'Error de conexion':'No hay ninguna operacion aqui'

    return(
      <div className={'error-messege'}>
        <p>{messege}</p>
      </div>
    )
  }




  input = `$${props.data.data.input}$`

  return(
    <div className={'floating-panel'}>
      <div className={'panel-container'}>
        <div style={{ marginBottom:15 }} id={'latex-container'}><Latex>{input}</Latex></div>
        <div id={'latex-container'}><Latex>{props.data.data.latex}</Latex></div>
      </div>

      <div style={{ marginRight:20 }} onClick={showSteps}>
        <Steps/>
      </div>
    </div>
  )
}



export default FloatingPanel
