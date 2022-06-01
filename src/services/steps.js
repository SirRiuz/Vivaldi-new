import SETTINGS from "../settings"


function getSteeps(data) {

  var params = new FormData()
  console.log(data.latex)
  params.append('latex',data.latex)
  //params.append('operation','integrate')

  return fetch(SETTINGS.API_URL+'/api/v1/steps/',{
    method:'POST',
    body:params
  }).then(res => res.json())
}


export { getSteeps }