import userModel from "../model/users.js";

const addUser = (req, res) => {
  if (req.body) {
    const { name, email, city } = req.body;

    // add user to dataBase
    try {
      const newUser = new userModel({ name, email, city });
      newUser.save();
      console.log(`User ${name} added to database`);
    } catch (error) {
      console.log("Data not inserted: ", error);
    }
  } else {
    res.send("Data Lost, Server Error :/");
  }
};

export default addUser;
