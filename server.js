const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors")

const app = express();

require("dotenv").config();
require("./config/database");

app.use(cors())
app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use(require("./config/auth"));
app.use("/api/appointments", require("./routes/api/appointments"));
app.use("/api/clients", require("./routes/api/clients"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});