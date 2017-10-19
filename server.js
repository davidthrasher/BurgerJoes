const express = require("express");
var bodyParser = require('body-parser');
const methodOverride = require("method-override");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const routes = require("./routes/routes.js")(app);// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({force: false}).then(function() {
	app.listen(PORT, function(err) {
		if (err) throw err;
		console.log("Listening on port: " + PORT);
	});
});

// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
