var http = require("http");

var fs = require("fs");

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"} );

var readStream = fs.createReadStream(__dirname + "/Title.html", "utf-8");
readStream.pipe(response);
});


server.listen(3000);
