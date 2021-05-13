const { readFile } = require("fs");

const getLog = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getLog("./src/builtin/content/sub/logs.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
