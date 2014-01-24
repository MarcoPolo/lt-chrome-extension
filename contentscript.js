chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var port = request.port;
  if (request.connect){
    var script = document.createElement("script");
    script.type="text/javascript";
    script.src="http://localhost:"+port+"/socket.io/lighttable/ws.js";
    script.id="lt_ws";
    document.body.appendChild(script);
  }
});
