const http = require("http");
const handlerRequest = require("./middleware/handlerRequest");

const server = http.createServer(handlerRequest);

const start = (port) => {
  server.listen(port, () => console.log(`server listening on port ${port}`));
};

module.exports = { start };
