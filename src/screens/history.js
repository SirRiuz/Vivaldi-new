

import { getHistory, removeItem } from '../services/history'
import React, { useCallback, useEffect } from 'react'
import '../styles/history.css'
import CloseIcon from '../svg/Close'


var Latex = require('react-latex')



function History(props) {

  var [ history,setHistory ] = React.useState(null)
  var renderHistory = null

  const onDelete = useCallback((data) => {
    removeItem(data.id,() => { showHistory() })
  })

  const showHistory = useCallback(() => {
    getHistory((history) => {
      setHistory(history = history)
    })
  },[])


  useEffect(() => { if(history === null){ showHistory() } },[])


  if(history !== null){
    
    if(history.length <= 0){
      return <div className={'no-operations'}>No hay operaciones</div>
    }

    renderHistory = history.map((x,k) => (
      <div key={k} className={'history-item'}>
        <div>
          <div><Latex>{`$${x.input}$`}</Latex></div>
          <div><Latex>{`$${x.result}$`}</Latex></div>
        </div>

        <div onClick={() => onDelete(x)}>
          <CloseIcon/>
        </div>
      </div>
    ))
  }


  return(
    <div>
      { renderHistory }
    </div>
  )
}



export default History

