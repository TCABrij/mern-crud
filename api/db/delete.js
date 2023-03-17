import userModel from "../model/users.js";

const deleteFromDb = async (condition)=> {
    await userModel.deleteOne(condition)
}

export default deleteFromDb;