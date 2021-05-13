const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`data recieved`);
});

customEmitter.on("response", (module, id) => {
  console.log(`data recieved module ${module} id ${id}`);
});

customEmitter.emit("response", "events", 146);
