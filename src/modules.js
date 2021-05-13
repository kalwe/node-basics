// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const words = require("./words");
const utils = require("./utils");

// console.log(module)
utils.say(words.word);
utils.say(words.message);
