const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const port = 8000;

app.use(
  cors({
    credentials: true,
    origin: [],
    methods: "GET, POST, PUT, DELETE, OPTIONS, HEAD",
  })
);
//app.use(express.json());
app.use(express.json({ limit: "10mb" })); //this line is added by yogesh to avoid the entitiy too large error while decrypting
app.use(body.urlencoded({ limit: "10mb", extended: true }));
app.use(helmet());

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World! This is Chat App By Addy!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
