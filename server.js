const express = require('express');
const app = express();
const registry = require("./modules/Registry");

registry.init(app);
registry.registerRouter("test",__dirname);
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});