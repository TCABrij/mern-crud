import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})

const userModel = new mongoose.model("user", userSchema)


export default userModel;