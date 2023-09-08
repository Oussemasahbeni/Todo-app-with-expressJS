import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let tasks = [];
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    taskArray: tasks,
  });
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  tasks.push(req.body["todo-task"]);
  req.body["todo-task"] = "";
  res.redirect("/");
});
app.post("/delete", (req, res) => {
  tasks.pop(req.body["todo-task"]);
  req.body["todo-task"] = "";
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
