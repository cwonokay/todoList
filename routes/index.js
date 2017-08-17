const express = require("express");
const router = express.Router();


const todo= [];
const done=[];


router.get("/", function (req, res) {
  res.render('todo', { todo: todo, done: done });
});

router.post("/", function (req, res) {
  todo.push(req.body.todo);
  res.redirect('/');
})

module.exports = router;
