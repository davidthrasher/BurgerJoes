const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const routes = require("./controllers/menuController.js");

app.use('/', routes);

app.use('/menu', routes);
app.use('/menu/:id', routes);
// Send every request to the React app
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

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
