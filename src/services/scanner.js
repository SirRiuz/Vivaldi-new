import SETTINGS from "../settings";



function getLatexByImage(data) {

  const URL = `${SETTINGS.API_URL}/api/v1/scanner/`
  var params = new FormData()
  
  params.append('baseImage',data.baseCode)

  return fetch(URL,{method:'post',body:params})
}


export { getLatexByImage }





