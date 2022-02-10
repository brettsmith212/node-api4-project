const server = require("./src/server");

require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

server.use("*", (req, res) => {
  res.send("<h1>New App Backend!</h1>");
});
