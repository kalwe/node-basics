// const { readFile } = require("fs");
const { readFile } = require("fs").promises;
const util = require("util");

const readFilePromise = util.promisify(readFile);

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

// getLog("./src/builtin/content/sub/logs.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    // const logs = await getLog("./src/builtin/content/sub/logs.txt");
    // const logs = await readFilePromise(
    //   "./src/builtin/content/sub/logs.txt",
    //   "utf8"
    // );
    const logs = await readFile("./src/builtin/content/sub/logs.txt", "utf8");
    console.log(logs);
  } catch (error) {
    console.log(error);
  }
};

start();
