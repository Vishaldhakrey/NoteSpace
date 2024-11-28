import User from "../models/userModel.js"
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {

    const {username, email, password} = req.body;

    const isValidUser = await User.findOne({email: email});

    if(isValidUser){
        return next(errorHandler(400, "User already Exist"));
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username, 
        email, 
        password: hashPassword,
    });

    try {
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User Created Succesfully",
        })
    } catch (error) {
        next(error);
    }

}

export const login = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        
        const validUser = await User.findOne({email: email});

        if(!validUser) {
            return next(errorHandler(404, "user not found"))
        }

        const validPassword = await bcrypt.compare(password, validUser.password);

        if(!validPassword) {
            return next(errorHandler(401, "Wrong credentials"));
        }

        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)

        const {password: pass, ...rest} = validUser._doc;

        res.cookie("access_token", token, {httpOnly: true}).status(200).json({
            success: true,
            message: "Login Successful!",
            rest,
        })
    } catch (error) {
        next(error);
    }
}

export const logout = (req, res, next) => {
    try{
        res.clearCookie("access_token");

        res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (err){
        next(err);
    }
}