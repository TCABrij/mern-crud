import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
})

const userModel = new mongoose.model("student", userSchema)


export default userModel;