const express          = require("express");
const path             = require("path");
const mustacheExpress  = require("mustache-express");
const routes           = require("./routes/index");
const bodyParser       = require("body-parser");
const expressValidator = require("express-validator");
const app              = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(expressValidator());

app.use(routes);





app.listen(3000, function() {
  console.log("App is running on localhost:3000");
});
