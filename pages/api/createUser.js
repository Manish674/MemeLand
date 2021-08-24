import jwt from "jsonwebtoken";
import connect from "../../utils/database";
import User from "../../model/userModel";

connect();

export default async function createUser(req, res) {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
}
