"use strict";

// imports
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

// constants
const port = process.env.PORT || 3010;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(compression());

app.listen(port, "localhost", () => {
  console.log("Server is running on port: " + port);
});

// shared files
app.get("/_shared/shared.css", (req, res) => {
  res.sendFile(__dirname + "/_shared/shared.css");
});
app.get("/_shared/shared.js", (req, res) => {
  res.sendFile(__dirname + "/_shared/shared.js");
});
app.get("/_shared/assets/favicon.ico", (req, res) => {
  res.sendFile(__dirname + "/_shared/assets/favicon.ico");
});
app.get("/_shared/assets/logo.png", (req, res) => {
  res.sendFile(__dirname + "/_shared/assets/logo.png");
});

// routes
app.use("/", express.static(__dirname + "/_home"));
app.use("/whywasmessagesofhopecreated", express.static(__dirname + "/_why-was-moh-created"));

