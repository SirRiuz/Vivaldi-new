import SETTINGS from "../settings"


function getSteeps() {

  var params = new FormData()
  params.append('latex','\\int\\sin^2x')
  params.append('operation','integrate')

  return fetch(SETTINGS.API_URL+'/api/v1/steps/',{
    method:'POST',
    body:params
  }).then(res => res.json())
}


export { getSteeps }