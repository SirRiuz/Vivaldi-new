import SETTINGS from "../settings"


function getSteeps(data) {


  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 9000)

  var params = new FormData()
  console.log(data.latex)
  params.append('latex',data.latex)
  //params.append('operation','integrate')

  return fetch(SETTINGS.API_URL+'/api/v1/steps/',{
    method:'POST',
    signal:controller.signal,
    body:params
  })
}


export { getSteeps }