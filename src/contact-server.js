"use strict";

// imports
const express = require("express");
const compression = require("compression");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

// constants
const port = process.env.PORT || 4002;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(compression());

app.listen(port, "localhost", () => {
  console.log("Server is running on port: " + port);
});

app.post("/", (req, res) => {
  const data = req.body;
  const name = data.name;
  const organisation = data.organisation;
  const email = data.email;
  const message = data.message;

  let finalString;
  let failed = false;
  let failedObject = {};

  if (name.length < 1) {
    failedObject.name = "Name is required";
  }

  if (email.length < 1 || !email.includes("@")) {
    failedObject.email = "Email is required";
  }

  if (message.length < 1) {
    failedObject.message = "Message is required";
  }

  if (organisation.length < 1) {
    finalString = 'echo "Name: ${name}\nEmail: ${email}\nMessage: ${message}" | sendmail contact@messagesofhope.co.uk';
  } else {
    finalString = 'echo "Organisation: ${organisation}\nName: ${name}\nEmail: ${email}\nMessage: ${message}" | sendmail contact@messagesofhope.co.uk';
  }

  if (failed) {
    res.status(400).send(failedObject);
    return;
  }

  const { exec } = require('node:child_process');
  exec(finalString, (err, output) => {
    if (err) {
        res.send(503).send("Something went wrong");
        return;
    }
    res.status(200).send("Message sent");
  });
});