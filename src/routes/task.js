const { Router } = require("express");
const router = Router();
const tasks = require("./todos.json");
const _ = require("underscore");

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const { title, responsible, description, priority } = req.body;
  if (title && responsible && description && priority) {
    var id = 0;
    for (i = 0; i < tasks.todos.length; i++) {
      if (_.findIndex(tasks.todos, { id: i }) == -1) {
        id = i;
        break;
      } else {
        id = tasks.todos.length;
      }
    }
    const newTask = { id, ...req.body };
    tasks.todos.push(newTask);
    res.json(tasks);
  } else {
    res.status(500).json({ error: "Request incompleted or incorrect" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    for (var i = 0; i < tasks.todos.length; i++) {
      if (tasks.todos[i].id == id) {
        tasks.todos.splice(i, 1);
        break;
      }
    }
    // _.each(tasks.todos, (task, i) => {
    //     if (parseInt(task.id) == parseInt(id)) {
    //     console.log("==================");
    //     tasks.todos.splice(i, 1);
    //     return false;
    // }
    // });
    res.json(tasks);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, responsible, description, priority } = req.body;
  if (title && responsible && description && priority) {
    _.each(tasks.todos, (task, i) => {
      if(task.id == id) {
        task.title = title;
        task.responsible = responsible;
        task.description = description;
        task.priority = priority;
      }
    });
    res.json(tasks)
  } else {
    res.status(500).json({ error: "Request incompleted or incorrect" });
  }
});

module.exports = router;
