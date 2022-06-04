import SETTINGS from "../settings";



function getLatexByImage(data) {

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 9000)
  const URL = `${SETTINGS.API_URL}/api/v1/scanner/`

  var params = new FormData()
  
  params.append('baseImage',data.baseCode)

  return fetch(URL,{
    method:'post',
    body:params,
    signal:controller.signal
  })
}


export { getLatexByImage }





