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
  res.status(200).json(
    usersData.map((user) => {
      return user.username;
    })
  );
});

router.post("/register", (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "missing username and password" });
  } else {
    res.status(201).json({
      username: username,
      password: password,
    });
  }
});

module.exports = router;
