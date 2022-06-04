

import SETTINGS from "../settings"


function calculate(data) {

  const URL = SETTINGS.API_URL+'/api/v1/calculate/'
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 9000)

  var params = new FormData()
  
  params.append('latex',data.latex)
  params.append('operation',data.operation)


  return fetch(URL,{
    method:'POST',
    signal:controller.signal,
    body:params
  })

}


export {
  calculate
}