import userModel from "../model/users.js";

const updateUser = async (req, res) => {
  // const user = req.body;
  // const user_id = req.params.id;
  // try {
  //   const result = await userModel.findByIdAndUpdate(user_id, user);
  //   console.log("Update: ", result);
  // } catch (error) {
  //   console.log("Error while updating user: ", error);
  // }
  res.send("2 Lakh Errors: Update ka Code Likho Pehle :)")
  console.log("updated user: ", req.params.id);
  
};

export default updateUser;
