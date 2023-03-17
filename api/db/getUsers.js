import userModel from "../model/users.js";

const getUsers = async ()=>{
    try {
        return await userModel.find()
    } catch (error) {
        console.log("Error occured: ", error);
    }
}

export default getUsers;