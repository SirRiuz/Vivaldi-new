

function createUUID() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}


function saveResult(data,callback) {

  var history = localStorage.getItem('history')
  var result = data.result
  //result = result.replace('$\displaystyle',' ')
  //result = result.replace('$',' ')


  history = (history !== null) ? JSON.parse(history):[]
  history = history.concat({
    id:createUUID(),
    result:result,
    input:data.latex
  })
  history = JSON.stringify(history)

  localStorage.setItem('history',history)
  callback()
}



function getHistory(callback) {
  var history = localStorage.getItem('history')
  history = (history !== null) ? history:'[]'
  callback(JSON.parse(history))
}

function removeItem(id,callback) {

  var history = localStorage.getItem('history')
  var newHistory = []

  history = (history !== null) ? JSON.parse(history):[]
  history.map((x,k) => {
    if(x.id !== id){
      newHistory = newHistory.concat({
        id:x.id,
        result:x.result,
        input:x.input
      })
    }
  })

  localStorage.setItem('history',JSON.stringify(newHistory))
  callback()  
}


export { saveResult,getHistory,removeItem }