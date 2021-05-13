const http = require("http");
const handlerRequest = require("./middleware/handlerRequest");

const PORT = 3030;

const server = http.createServer(handlerRequest);

const start = () => {
  server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
};

module.exports = { start };
