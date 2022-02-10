function validateInput(req, res, next) {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "missing username and password" });
  } else {
    req.username = username;
    req.password = password;
    next();
  }
}

module.exports = {
  validateInput,
};
