"use strict";

// imports
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

// constants
const PORT = process.env.PORT || 3010;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(compression());

app.listen(port, "localhost", () => {
  console.log("Server is running on port: " + port);
});

// routes
app.get("/shared.css", (req, res) => {
  res.sendFile(__dirname + "/shared.css");
});
app.get("/shared.js", (req, res) => {
  res.sendFile(__dirname + "/shared.js");
});
app.get("/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/favicon.ico");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home/index.html");
});
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/home/style.css");
});
app.get("/script.js", (req, res) => {
  res.sendFile(__dirname + "/home/script.js");
});
