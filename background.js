var sendConnectMessage = function(tabId, port){
  chrome.tabs.sendMessage(tabId, {connect:true, port:port})
}

chrome.storage.onChanged.addListener(function(changes, areaName){
  console.log("The storage has changed",changes,areaName);
  var tabId = Object.keys(changes)[0]
  var isConnected = changes[tabId].newValue.connected;
  if(isConnected){
    sendConnectMessage(parseInt(tabId), changes[tabId].newValue.port)
  }
  chrome.browserAction.setBadgeText({tabId:parseInt(tabId), text:(isConnected ? "On" : "")})
})


var inject = function(tabId){
  chrome.storage.local.get(tabId+"", function(data){
    if (Object.keys(data).length === 0) return;
    data = data[tabId]
    var port = data.port
    if (data.connected){
      sendConnectMessage(tabId, port)
    }
    chrome.browserAction.setBadgeText({tabId:tabId, text:(data.connected ? "On" : "")})
  })
}

var listenForRefresh = function(tabId, status){
  status = status.status
  if (status === "complete"){
    inject(tabId)
  }
}

chrome.tabs.onUpdated.addListener(listenForRefresh)
