import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password || username === "" || email === "" || password === "") {
            throw errorHandler(400, "All Fields are Required!");
        }
        if (username.length < 5 || username.length > 20 || !username.match(/^[a-zA-Z0-9._-]+$/)){
            throw errorHandler(400, "Username must be between 5 and 20 characters! (only letters, numbers, underscores, dot, and hyphens)");
        }
        if (password.length < 8 || password.length > 20 || password.includes(" ")) {
            throw errorHandler(400, "Password must be between 8 and 20 characters! (no spaces)");
        }
        if (email.length < 8 || email.length > 30 || !email.includes("@") || !email.includes(".") || email.includes(" ") || email.includes("@.") || email.includes(".@") || !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ) {
            throw errorHandler(400, "Invalid email!");
        }
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        await newUser.save();

        res.json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password || email === "" || password === "") {
            throw errorHandler(400, "All Fields are Required!");
        }

        const validUser = await User.findOne({ email });

        if (!validUser) {
            throw errorHandler(404, "User not found!");
        }

        const validPassword = await bcryptjs.compare(password, validUser.password);

        if (!validPassword) {
            throw errorHandler(400, "Invalid password!");
        }

        const token = jwt.sign(
            { id: validUser._id, isAdmin: validUser.isAdmin},
            process.env.JWT_SECRET,
        );
        const { password: pass, ...rest} = validUser._doc;
        
        res.status(200).cookie("access_token", token, {
            httpOnly: true,
        }).json(rest);

    } catch (error) {
        next(error);
    }
};

export const google = async (req, res, next) => {
    const { name, email, googlePhotoUrl } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin},
                process.env.JWT_SECRET,
                { expiresIn: "100h" }
            );
            const { password: pass, ...rest} = user._doc;
            
            res.status(200).cookie("access_token", token, {
                httpOnly: true,
            }).json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(" ").join("") + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });

            await newUser.save();

            const token = jwt.sign(
                { id: newUser._id, isAdmin: newUser.isAdmin},
                process.env.JWT_SECRET,
            );
            const { password, ...rest} = newUser._doc;
            
            res.status(200).cookie("access_token", token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        next(error);
    }   
}
