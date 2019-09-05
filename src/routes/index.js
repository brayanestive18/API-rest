const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    // fs.readFile('./todos.json', 'utf8', (err, data) => {
    //   if (err) {
    //     throw err;
    //   }
    //   res.send(JSON.parse(data));
    // });

    const data = 
    {
        "title": "Task 1",
        "responsible": "Brayan",
        "description": "Algo por hacer",
        "priority": "high"
    };

    res.send(data)
  });

  module.exports = router;