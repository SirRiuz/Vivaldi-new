

import React from 'react';
import AplicationContext from './context/Aplication';
import Navigator from './Navigator';
import Scanner from './screens/scanner';
import Calculator from './screens/calculator'
import './styles/app.css'



function App() {

  const [ context,setContext ] = React.useState({
    screen:null
  })


  return (
    <div className="App">
      <AplicationContext.Provider value={{
        context,
        setContext
      }}>
        <Calculator/>
        <Navigator/>
      </AplicationContext.Provider>
    </div>
  );
}

export default App;
