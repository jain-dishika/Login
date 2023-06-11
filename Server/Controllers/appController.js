import UserModel from '../Model/User.Model.js';
import bcrypt from 'bcrypt';
import mongoose from "mongoose";


export async function register(req, res) {
    try {
        const { userName, password, email } = req.body;

        const username = await UserModel.findOne({ userName })
        const useremail = await UserModel.findOne({ email })

        if(password){
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new UserModel({
                userName,
                password: hashedPassword,
                email
            });
            const savedUser = await newUser.save()
            return res.send(savedUser)
        }
    } catch (error) {
        console.log("3" + error)
        return res.status(500).send(error);
    }
    // res.json('register route');
}
export async function login(req, res) {
    res.json('login route');
}
export async function getUser(req, res) {
    res.json('User route');
}
export async function createResetSession(req, res) {
    res.json('createResetSession route');
}