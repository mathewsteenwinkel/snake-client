const net = require("net");
const connect = require("./client");

const conn = connect()


const handleUserInput = function (key) {
  console.log(key)
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connect.write("Move: up");
  }
  if (key === "a") {
    connect.write("Move: left");
  }
  if (key === "s") {
    connect.write("Move: down");
  }
  if (key === "d") {
    connect.write("Move: right");
  }
  if (key === "p") {
    connect.write("Move: hello");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


setupInput();


module.exports = setupInput


