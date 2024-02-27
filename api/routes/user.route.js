import express from "express";
import { deleteUser, getAuthor, getUser, getUsers, signout, text, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", text);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signout);
router.get('/getusers', verifyToken, getUsers);
router.get("/author/:userId", getAuthor);
router.get('/:userId', getUser);

export default router;