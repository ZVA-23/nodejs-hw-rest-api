const { User } = require("../models/user");
const { HttpError, cntrlWrapper } = require("../helpers");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    user: { email: newUser.email, subscription: newUser.subscription },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  const passwordCompare = await bcrypt.compare(user.password, password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }
  const token = "12ths.45ewfdfg.454545";

  res.json({
    token,
  });
};

module.exports = {
  register: cntrlWrapper(register),
  login: cntrlWrapper(login),
};
