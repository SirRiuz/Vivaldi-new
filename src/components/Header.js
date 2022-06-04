


import React from 'react'
import '../styles/header.css'
import Scan from '../svg/Scan'
import Steps from '../svg/Steps'
import aplicationContext from '../context/Aplication'



function Header(props) {

  const appContext = React.useContext(aplicationContext)
  const onClick = React.useCallback(() => {
    var newContext = {
        screen:{
          title:'Paso a paso',
          to:'steps',
          showSteps:true,
          params:{
          latex:document.getElementById('math-input').value
        }
      }
    }


    appContext.setContext(
      () => appContext.context=newContext
    )
  })


  const showCamera = React.useCallback(() => {
    var newContext = { screen:{ to:'scanner' },appBar:'hidden' }
    appContext.setContext(
      () => appContext.context=newContext
    )
  },[])

  var showStepsIcon = null

  
  if(appContext.context.showSteps) {
    console.log(appContext)
    showStepsIcon = (
      <div className={'icon'} onClick={onClick}>
        <Steps/>
      </div>
    )
  }


  return(
    <div className={'header-container'}>
      <div className={'fields-container'}>
        <div className={'fields-header'}>
          <div><math-field id={'math-input'}></math-field></div>

          <div className={'action-bts-container'}>
            { showStepsIcon }

            <div className={'icon'} onClick={showCamera}>
              <Scan/>
            </div>
          </div>

        </div>
        <math-field id={'math-result'}></math-field>
      </div>
    </div>
  )
}


export default Header


