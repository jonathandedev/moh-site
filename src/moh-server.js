"use strict";

// imports
const express = require("express");
const compression = require("compression");
const cors = require("cors");
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
app.use("/_shared", express.static(__dirname + "/_shared"));
app.use("/", express.static(__dirname + "/_home"));

app.use("/writeamessage", express.static(__dirname + "/_write-a-message"));

app.use("/aboutmessagesofhope", express.static(__dirname + "/_about-moh"));
app.use("/thriveldnpartnership", express.static(__dirname + "/_thrive-ldn-partnership"));

app.use("/projects/_shared", express.static(__dirname + "/_shared")); 
app.use("/projects", express.static(__dirname + "/_projects"));
app.use("/projects/collaborativeartproject", express.static(__dirname + "/_collaborative-art-project"));
app.use("/projects/worldmentalhealthday2022", express.static(__dirname + "/_world-mental-health-day-2022"));
app.use("/projects/murals", express.static(__dirname + "/_murals"));
app.use("/projects/messagesofhope2020", express.static(__dirname + "/_messages-of-hope-2020"));

app.use("/freecolouring", express.static(__dirname + "/_free-colouring"));

app.use("*", express.static(__dirname + "/_404"));
