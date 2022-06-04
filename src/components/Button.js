

import React, { useCallback } from 'react'
import '../styles/button.css'
import KeyContext from '../context/KeyboardContext'
import PropTypes from "prop-types"
import { calculate } from '../services/calculator'
import { saveResult } from '../services/history'
import AplicationContext from '../context/Aplication'
import { getOperationName } from '../services/utils'
import ReactLoading from 'react-loading';




// ACTION_BUTTONS
const ACTION_DELETE = 'delete'
const ACTION_MOVE_LEFT = 'moveLeft'
const ACTION_MOVE_RIGTH = 'moveRigth'
const ACTION_SUBMIT = 'submit'
const ACTION_CHANGE_KEY = 'change-key'
const ACTION_NATIVATE_TOHISTORY = 'navigate-to-history'
const ACTION_INSERT = undefined



function actionButtons(action,context,appContext,props) {


  if(action === ACTION_INSERT) {
    var newContext = { screen:null }
    newContext['showSteps'] = false

    if(context.isError) {
      document.getElementById('math-input').value = ''
      context.setError(() => context.isError = false)
    }

    appContext.setContext(() => appContext.context = newContext)

    document.getElementById('math-input').focus()
    document.getElementById('math-input').insert(props.value)
    document.getElementById('math-result').value = ''
  }

  if(action === ACTION_DELETE){

    if(context.isError) {
      document.getElementById('math-input').value = ''
      context.setError(() => context.isError = false)
    } else {
      var newContext = { screen:null }
      newContext['showSteps'] = false

      appContext.setContext(() => appContext.context = newContext)
      document.getElementById('math-result').value = ''
      document.getElementById('math-input').focus()
      document.getElementById('math-input').executeCommand('deleteBackward')
    }

  }

  if(action === ACTION_MOVE_LEFT){
    document.getElementById('math-input').focus()
    document.getElementById('math-input').executeCommand('moveToPreviousChar')
  }

  if(action === ACTION_MOVE_RIGTH){
    document.getElementById('math-input').focus()
    document.getElementById('math-input').executeCommand('moveToNextChar')
  }

  if(action === ACTION_SUBMIT){
    context.setLoad(() => context.isLoad = true)
    var value = document.getElementById('math-input').value
    var result = document.getElementById('math-result').value


    if(value === '' || result !== '' || context.isError){ 
      context.setLoad(() => context.isLoad = false)
      return
    }

    calculate({
      latex:value,
      operation:getOperationName(value)
    })
      .then(res => res.json())
      .then(res =>{
        if(res.status === 'ok'){
          saveResult({
            latex:value,
            result:res.latex
          },() => {
            console.log()
            var newContext = { screen:null }
            newContext['showSteps'] = res.showSteps

            appContext.setContext(() => appContext.context = newContext)
            document.getElementById('math-result').value = ''
            document.getElementById('math-result').insert(`=\\,\\,${res.latex}`)
          })
        } else {
          document.getElementById('math-result').value = ''
          document.getElementById('math-input').value = 'Syntax\\,\\,error'
          context.setError(() => context.isError = true)
        }
        context.setLoad(() => context.isLoad = false)
      })
      .catch(err => {
        document.getElementById('math-result').value = ''
        document.getElementById('math-input').value = 'Error\\,\\,de\\,\\,conexion'
        context.setLoad(() => context.isLoad = false)
        context.setError(() => context.isError = true)
      })
  }

  if(action === ACTION_CHANGE_KEY){
    (context.keyboard === 'numeric') ? 
      context.setKeyboard(() => context.keyboard = 'function'):
      context.setKeyboard(() => context.keyboard = 'numeric')
  }


  if(action === ACTION_NATIVATE_TOHISTORY){
    var newContext = {
      screen:{ to:'history',title:'Historial' },
      params:{}
    }

    appContext.setContext(() => appContext.context=newContext)
  }

}



function Button(props) {

  const context = React.useContext(KeyContext)
  const ref = React.createRef()
  var aplicationContext = React.useContext(AplicationContext)
  const onClickButton = useCallback(() => {
    actionButtons(props.action,context,aplicationContext,props)
  })

  //context.isLoad
  if(props.action === ACTION_SUBMIT && context.isLoad){
    return(
      <div style={{ ...props.style }}>
        <ReactLoading type={'spin'} color={'black'} height={20} width={20} />
      </div>
    )
  }
  
  return(
    <button
      onClick={onClickButton}
      ref={ref}
      style={{ ...props.style }}
    >
      { props.renderValue }
    </button>
  )
}



Button.prototype = {
  value:PropTypes.string.isRequired,
  renderValue:PropTypes.string.isRequired,
  type:PropTypes.string,
}


export default Button

