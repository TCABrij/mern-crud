import userModel from "../model/users.js";

const updateUser = async (req, res) => {
  const user = req.body;
  try {
    const result = await userModel.findByIdAndUpdate(user.id, user);
    console.log("Update: ", result);
  } catch (error) {
    log("Error while updating user: ", error);
  }
  console.log(req.body);
  res.render("success", { message: "Updated Successfully 👍" });
};

export default updateUser;
