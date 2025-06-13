// imports
const express = require("express");
const postRouter = require("./routers/posts.js");
const errorHandler = require("./middleware/errorHandler.js");
const notFound = require("./middleware/notFound.js");
const cors = require("cors");

// express app config
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:` + appPort;

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// middelware
app.use(express.static("public")); // static assets
app.use(express.json()); // body-parsers middleware

app.use("/posts", postRouter); // routers

// error
app.use(notFound);
app.use(errorHandler);

app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
