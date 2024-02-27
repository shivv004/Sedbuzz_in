import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const text = (req, res) => {
    res.json({
        message: "API is working"
    });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not authorized to update this user"));
    }
    if (req.body.password) {
        if (req.body.password.length < 8 || req.body.password.length > 20 || req.body.password.includes(" ")) {
            return next(errorHandler(400, "Password must be between 8 and 20 characters! (no spaces)"));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
        if (req.body.username.length < 5 || req.body.username.length > 20) {
            return next(errorHandler(400, "Username must be between 5 and 20 characters"));
        }
        else if (req.body.username.includes(" ")) {
            return next(errorHandler(400, "Username must not contain spaces"));
        }
        else if (req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, "Username must be lowercase"));
        }
        else if (!req.body.username.match(/^[a-zA-Z0-9._-]+$/)){
            return next(errorHandler(400, "Username must contain only letters, numbers, periods, underscores, dot, and hyphens"));
        }
    }
    if (req.body.about) {
        if (req.body.about.length < 150 || req.body.about.length > 400) {
            return next(errorHandler(400, "About must be less than 400 characters and more than 150 characters"));
        }
    }
    if (req.body.linkedin) {
        if (req.body.linkedin.length > 500) {
            return next(errorHandler(400, "Invalid LinkedIn URL"));
        }
    }
    if (req.body.twitter) {
        if (req.body.twitter.length > 500) {
            return next(errorHandler(400, "Invalid Twitter URL"));
        }
    }
    if (req.body.github) {
        if (req.body.github.length > 500) {
            return next(errorHandler(400, "Invalid Github URL"));
        }
    }
    if (req.body.name) {
        if (req.body.name.length > 30) {
            return next(errorHandler(400, "Name must be less than 30 characters"));
        }
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
            $set: {
                username: req.body.username,
                name: req.body.name,
                about: req.body.about,
                profilePicture: req.body.profilePicture,
                linkedin: req.body.linkedin,
                twitter: req.body.twitter,
                github: req.body.github,
                password: req.body.password,
            },
        },   { new: true });
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
        return next(errorHandler(403, "You are not authorized to delete this user"));
    }
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json("User has been deleted");
    } catch (error) {
        next(error);
    }
};

export const signout = (req, res, next) => {
    try {
        res.clearCookie("access_token").status(200).json("User has been signed out");
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
  
      const users = await User.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
  
      const totalUsers = await User.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await User.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };

  export const getAuthor = async (req, res, next) => {
    try {
      const author = await User.findById(req.params.userId);
      if (!author) {
        return next(errorHandler(404, 'Author not found'));
      }
      const { password, ...rest } = author._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };

  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return next(errorHandler(404, 'User not found'));
      }
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };