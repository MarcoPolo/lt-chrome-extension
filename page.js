var connect = document.getElementById("connect")
var disconnect = document.getElementById("disconnect")
var portInput = document.getElementById("port")

var saveTabConnectionInfo = function(isConnected){
  chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    var tabId = arrayOfTabs[0].id;
    var port = portInput.value
    var data = {}
    data[tabId] = {connected:isConnected, port:port}
    chrome.storage.local.set(data)
  })
}

connect.onclick = function(){
  saveTabConnectionInfo(true)
}

disconnect.onclick = function(){
  saveTabConnectionInfo(false)
}
