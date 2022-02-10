const express = require("express");

const router = express.Router();

const usersData = [
  {
    username: "glenjones420",
    password: "smellyboi",
  },
  {
    username: "ericsmithsmokescannibas",
    password: "420w33dboy",
  },
  {
    username: "walterhobbs",
    password: "buddyisnotmyson",
  },
];

router.get("/users", (req, res) => {
  res.status(200).json(usersData);
});

module.exports = router;
