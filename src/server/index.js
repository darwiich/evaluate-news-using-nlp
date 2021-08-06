const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;
var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const fetch = require("node-fetch");

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// to use json
app.use(bodyParser.json());
// to use url encoded values

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/post", async function (req, res) {
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${req.body.url}&lang=en`
  );
  let data = await response.json();
  res.send(data);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
