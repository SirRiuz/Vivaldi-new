

import SETTINGS from "../settings"


function calculate(data) {

  const URL = SETTINGS.API_URL+'/api/v1/calculate/'
  var params = new FormData()
  
  params.append('latex',data.latex)
  params.append('operation',data.operation)


  var response = fetch(URL,{
    method:'POST',
    body:params
  })

  return response.then(res => res.json())
}


export {
  calculate
}