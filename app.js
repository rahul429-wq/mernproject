const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

const User = require("./model/userSchema");

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("middlware in the house❤️");
  next();
};

// middleware();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/about", middleware, (req, res) => {
  console.log("After middleware👍");
  res.send("<h1>hello About</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>hello Contact</h1>");
});
app.listen(3000, () => {
  console.log(`connected on ${PORT}`);
});
