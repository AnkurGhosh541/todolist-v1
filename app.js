const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let todoItems = [];

app.get("/", function (req, res) {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    day: day,
    todoItems: todoItems,
  });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  todoItems.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started at http://localhost:3000");
});
