import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName :{
        type: String,
        required:[true , "User Name is required" ],
        unique: [true, "user Name must Be unique"]
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique: [true,'Email must be unique']
    },
    password:{
        type: String,
        required: [true, 'Password is required']
    }
})

const userModel = mongoose.model("users", userSchema);

export default userModel;