import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : [true, "Please provide unique UserName"],
        unique : [true, "UserName Exist"]
    },
    password : {
        type : String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email : {
        type : String,
        required: [true, "Please provide unique UserName"],
        unique : [true, "Email Exist"],
    },
    firstName : {type : String,},
    lastName : {type : String,},
})

// export default mongoose.model.Users || mongoose.model('User', UserSchema);
const UserModel =  mongoose.model('User', UserSchema);
export default UserModel;
// export default mongoose.model.Users || mongoose.model('User', UserSchema);