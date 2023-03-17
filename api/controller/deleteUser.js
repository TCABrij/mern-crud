import deleteFromDb from "../db/delete.js";
import userModel from "../model/users.js";

const deleteUser = async (req, res) => {
  const request_id = String(req.url).slice(8);
  const users = await userModel.find();
  const ids = users.map((user) => user.id);
  const isValidUser = ids.includes(request_id);

  // Delete user if Valid and response
  if (isValidUser) {
    deleteFromDb({_id: request_id}) // takes condition object
    console.log(`user: ${request_id} deleted from Database`);
    res.render("success", { message: "User Deleted Successfully" });
  } else res.render("success", { message: "Invalid Request or User Not Found 🤷‍♂️" });
};

export default deleteUser;
