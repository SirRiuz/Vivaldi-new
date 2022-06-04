

import Button from "./Button";
import '../styles/keyboard.css'
import MoveLeft from "../svg/MoveLeft";
import MoveRigth from "../svg/MoveRigth";
import Send from "../svg/Send";
import Delete from "../svg/Delete";
import FunctionChange from '../svg/Function'
import Numeric from "../svg/Numeric";
import React,{ useCallback } from "react";
import KeyContext from '../context/KeyboardContext'
import getKeys from "../context/Keyboard";
import SaveIcon from "../svg/Save";


function Keyboard(props) {

  var context = React.useContext(KeyContext)
  var keyboardData = getKeys(context.keyboard)


  
  //console.log(context.router.history)
  const getButtons = useCallback((k) => (
    keyboardData[k].map((x,k) => (
      <Button
        key={k}
        renderValue={x.renderValue}
        value={x.value}
        style={x.styles}
      />
    ))
  ))

  var keyBoard = [ ...new Array(6).keys() ].map((x,k) => (
    <div key={k} className={'keyboard-grup-buttios'}>
      { getButtons(k) }
    </div>
  ))


  return(
    <div className={'keyboard-container'}>
      <div className={'keyboard-item'}>
        { keyBoard }
        <div className={'keyboard-navbar'}>          
          <div className={'key-buttons'}>
            <Button
              style={{ width:'50px' }}
              renderValue={
                (context.keyboard === 'numeric') ? 
                (<FunctionChange/>):
                (<Numeric/>)
              }
              action={'change-key'}
            />
            <Button
              style={{ width:'50px' }}
              renderValue={<MoveLeft/>}
              action={'moveLeft'}
            />
            <Button
              style={{ width:'50px' }}
              renderValue={<MoveRigth/>}
              action={'moveRigth'}
            />

            <Button
              style={{ width:'50px' }}
              renderValue={<SaveIcon/>}
              action={'navigate-to-history'}
            />
          </div>


          <div className={'key-buttons'}>
            <Button
              style={{ width:'50px' }}
              renderValue={<Delete/>}
              action={'delete'}
            />
            <Button
              style={{
                width:'50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className={'send-button'}
              renderValue={<Send/>}
              action={'submit'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Keyboard


