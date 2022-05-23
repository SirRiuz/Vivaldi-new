

import '../styles/floatingPanel.css'



var Latex = require('react-latex')


function FloatingPanel(props) {

  const math = `$$ \\int \\int \\frac { 3x ^ { 2 } } { x } d x dy  $$`

  return(
    <div className={'floating-panel'}>
      <div id={'latex-container'}><Latex>{math}</Latex></div>
      <div id={'show-steps-in'}></div>
    </div>
  )
}



export default FloatingPanel

