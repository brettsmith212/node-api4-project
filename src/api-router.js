const express = require("express");

const router = express.Router();
const { validateInput } = require("./middleware");

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

router.post("/register", validateInput, (req, res) => {
  res.status(201).json({
    username: req.username,
    register: "successful",
  });
});

router.post("/login", validateInput, (req, res) => {
  res.status(200).json({
    username: req.username,
    login: "successful",
  });
});

module.exports = router;
