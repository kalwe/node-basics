const { createReadStream } = require("fs");

const stream = createReadStream("./src/builtin/content/sub/stream.txt", {
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
