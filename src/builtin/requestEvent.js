const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("request event");
});

server.listen(3030);
