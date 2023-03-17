import deleteFromDb from "../db/delete.js";

const deleteUser = async (req, res) => {
  const request_id = req.params.id;

  // Delete user
  // deleteFromDb({ _id: request_id }); // takes condition object
  console.log(`user: ${request_id} deleted from Database`);
};

export default deleteUser;
