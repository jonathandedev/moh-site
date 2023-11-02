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

// app.post("/writeamessage", (req, res) => {
//   const data = req.body;
//   if (!req.body.hasOwnProperty("message")) {
//     res.status(400).send("Message is required");
//     return;
//   }

//   const message = data.message;
//   const entry = "\n" + message + "$" + new Date().toISOString().slice(0, 10);
//   fs.appendFile("messages.csv", entry, (err) => {
//     if (err) {
//       res.status(503).send("Something went wrong");
//       return;
//     }
//     res.status(200).send("Message sent");
//   });
// });

app.post("/workwithus", (req, res) => {
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

  finalString = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  if (organisation.length > 1) {
    finalString = "Organisation: " + organisation + "\n" + finalString;
  } 

  if (failed) {
    res.status(400).send(failedObject);
    return;
  }

  fs.writeFile('contact-form.txt', finalString, (err) => {return;});

  const { exec } = require('node:child_process');
  exec('echo "Contact Form Response" | mutt -s Contact -a contact-form.txt -- contact@messagesofhope.co.uk', (err, output) => {
    if (err) {
        res.sendStatus(503);
        return;
    }
    res.status(200).send("Message sent");
  });
});