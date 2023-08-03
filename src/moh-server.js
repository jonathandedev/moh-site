"use strict";

// imports
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

// constants
const port = process.env.PORT || 4001;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(compression());

app.listen(port, "localhost", () => {
  console.log("Server is running on port: " + port);
});

// routes
app.use("/aboutmessagesofhope", express.static(__dirname + "/_about-moh"));
app.use("/thriveldnpartnership", express.static(__dirname + "/_thrive-ldn-partnership"));
app.use("/", express.static(__dirname + "/_home"));
// app.use("*", express.static(__dirname + "/_404"));

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
app.get("/_shared/assets/mobile-nav-image.webp", (req, res) => {
  res.sendFile(__dirname + "/_shared/assets/mobile-nav-image.webp");
});
app.get("/_shared/assets/mobile-nav-image.jpg", (req, res) => {
  res.sendFile(__dirname + "/_shared/assets/mobile-nav-image.jpg");
});

// fonts
app.get("/_shared/fonts/fonts.css", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/fonts.css");
});
app.get("/_shared/fonts/concert-one/ConcertOne-Regular.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/concert-one/ConcertOne-Regular.ttf");
});
app.get("/_shared/fonts/nunito/Nunito-Light.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/nunito/Nunito-Light.ttf");
});
app.get("/_shared/fonts/nunito/Nunito-Regular.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/nunito/Nunito-Regular.ttf");
});
app.get("/_shared/fonts/nunito/Nunito-SemiBold.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/nunito/Nunito-SemiBold.ttf");
});
app.get("/_shared/fonts/nunito/Nunito-Bold.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/nunito/Nunito-Bold.ttf");
});
app.get("/_shared/fonts/nunito/Nunito-ExtraBold.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/nunito/Nunito-ExtraBold.ttf");
});
app.get("/_shared/fonts/pt-sans/PTSans-Regular.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/pt-sans/PTSans-Regular.ttf");
});
app.get("/_shared/fonts/pt-sans/PTSans-Bold.ttf", (req, res) => {
  res.sendFile(__dirname + "/_shared/fonts/pt-sans/PTSans-Bold.ttf");
});
