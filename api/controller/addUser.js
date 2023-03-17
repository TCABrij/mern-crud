import userModel from "../model/users.js";

const addUser = (req, res) => {

  if (req.body) {
    const {name, email, city} = req.body;
    // console.log(name, email, city);

    // add user to dataBase
    try {
      const newUser = new userModel({name, email, city})
      newUser.save()
      console.log(`User ${name} added to database`)
    } catch (error) {
      console.log("Data not inserted: ", error);
    }

    res.render("success", {
      message:
        `New user: ${name} added succssfully 👍`
    });

  } else{
    res.render("success",{ message: "Data Lost, Server Error :/"})
  }
};

export default addUser;
