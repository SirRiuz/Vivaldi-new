

import '../styles/floatingPanel.css'



var Latex = require('react-latex')


function FloatingPanel(props) {

  var input = null

  if(props.data == null){ return }

  if(props.data.status == 'error'){
    return(
      <div className={'error-messege'}>
        <strong>No hay ninguna operacion aqui</strong>
      </div>
    )
  }


  input = `$ ${props.data.data.input} $`

  return(
    <div className={'floating-panel'}>
      <div id={'latex-container'}><Latex>{input}</Latex></div>
      <div id={'latex-container'}><Latex>{props.data.data.latex}</Latex></div>
    </div>
  )
}



export default FloatingPanel
