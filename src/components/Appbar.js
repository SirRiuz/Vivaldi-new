


import React, { useCallback,useContext } from 'react'
import AplicationContext from '../context/Aplication'
import '../styles/appbar.css'
import MoveLeft from '../svg/MoveLeft'



function AppBar(props) {

  const aplicationContext = React.useContext(AplicationContext)
  
  
  const goBack = useCallback(() => {
    var newContext = { screen:null,showSteps:aplicationContext.context.screen.showSteps }
    aplicationContext.setContext(
      () => aplicationContext.context=newContext
    )
  },[])

  if(aplicationContext.context.appBar === 'hidden'){
    return null
  }


  return(
    <div className={'app-bar'}>
      <div onClick={goBack}>
        <div className={'back-container'}>
          <MoveLeft/>
        </div>
      </div>

      <div className={'title-container'}>
        <strong>{props.title}</strong>
      </div>
    </div>
  )
}



export default AppBar