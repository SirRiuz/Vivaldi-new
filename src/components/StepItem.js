

import '../styles/stepItem.css'


function StepItem(props) {

  var expandBtn = (props.data.isExpand) ? <h1>Expand</h1>:null

  return(
    <div className={'step-item'}>
      hello world
    </div>
  )
}

export default StepItem


