const express = require("express");
const path = require("path");

const routes = require("./routes/routes");

//requeire ex-hbs
const hbs = require("express-handlebars");

const app = express();
const port = 3000;

//set hbs engine
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public/stylesheets/"));
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(port, () => console.log("Listening on port: " + port));
