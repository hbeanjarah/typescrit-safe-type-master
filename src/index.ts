import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const identity = <Type>(arg: Type): Type => {
  return arg;
};

let identityOutput = identity<string>("test");

console.log("identity", identityOutput);

app.listen(3001);
