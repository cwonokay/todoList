const express = require("express");
const router = express.Router();


const todos= [];
const completed=[];


// router.get("/", function (req, res) {
//   res.render('todo', { todos: todos, completed:completed });
// });
//
// router.post("/todo", function (req, res) {
//   todo.push(req.body.todo);
//   res.redirect('/');
// })
function generateId() {

  let id = 1;
  let isIdFound = true;

  while (isIdFound) {
    let item = todos.find(function(item) {
      return item.id == id;
    });

    if (item) {
      id++;
    } else {
      isIdFound = false;
    }
  }

  return id;
}

router.get("/", function(req, res) {
  res.render("todo", {todos: todos, completed: completed});
});

router.post("/create", function(req, res) {
  let obj = {
    id: generateId(),
    complete: false,
    text: req.body.todo
  };
  console.log(obj);
  todos.push(obj);
  res.redirect("/");
});

router.post("/completed/:id", function(req, res) {
  let item = todos.find(function(item) {
    return item.id == req.params.id;
  });
  let index = todos.indexOf(item);
  completed.push(item);
  todos.splice(index, 1);
  res.redirect("/");
});
module.exports = router;
