const express = require("express");
const app = express();
const morgan = require("morgan");
const fs = require("fs");

//Setting
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api/task', require('./routes/task'));
app.use('/api/users', require('./routes/User'));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
