import connect from "../../utils/database";
import User from "../../model/userModel";

connect();

export default async function getPeople(req, res) {
  const { email, password } = req.body;

  // check if email & password are correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    // TODO: Add error handler
    console.log("Something is wrong");
    return;
  }

  // to confirm the user
  const token = "";
  res.status(200).json({
    data: {
      user: "success",
      // user,
    },
    token,
  });
}
