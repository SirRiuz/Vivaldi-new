


import React from "react"
import Keyboard from "../components/Keyboard"
import KeyContext from "../context/KeyboardContext"
import { MathfieldComponent } from "react-mathlive";
import '../styles/inputField.css'
import Header from "../components/Header";



function Calculator(props) {

  const [ value,setValue ] = React.useState(null)
  const [ isLoad,setLoad ] = React.useState(false)
  const [ isError,setError ] = React.useState(false)
  const [ keyboard,setKeyboard ] = React.useState('numeric')

  return(
    <KeyContext.Provider
      value={{
        value,
        setValue,
        isLoad,
        setLoad,
        isError,
        setError,
        keyboard,
        setKeyboard
      }}
    >
      <Header/> 
      <Keyboard/>
    </KeyContext.Provider>
  )
}



export default Calculator


