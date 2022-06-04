

import React from 'react'
import AppBar from './components/Appbar'
import './styles/navigation.css'
import AplicationContext from './context/Aplication'
import History from './screens/history'
import Steps from './screens/steps'
import Scanner from './screens/scanner'



function Navigator(props) {

  var aplicationContext = React.useContext(AplicationContext)
  var renderComponent = null

  if(aplicationContext.context.screen === null){ return null }

  switch(aplicationContext.context.screen.to) {
    case 'history':
      renderComponent = <History/>
      break

    case 'steps':
      renderComponent = <Steps/>
      break

    case 'scanner':
      renderComponent = <Scanner/>
      break
  }

  return (
    <div className={'modal-screen'}>
      <AppBar title={aplicationContext.context.screen.title}/>
      <div className={'screen-container'}>
        { renderComponent }
      </div>
    </div>
  )
}


export default Navigator