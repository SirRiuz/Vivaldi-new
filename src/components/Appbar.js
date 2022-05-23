


import React, { useCallback,useContext } from 'react'
import AplicationContext from '../context/Aplication'
import '../styles/appbar.css'
import MoveLeft from '../svg/MoveLeft'



function AppBar(props) {

  const aplicationContext = React.useContext(AplicationContext)
  
  const goBack = useCallback(() => {
    var context = { screen:null }
    
    aplicationContext.setContext(
      () => aplicationContext.context=context
    )
  },[])

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