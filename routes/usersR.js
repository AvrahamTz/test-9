import express from "express";
import { userRegister } from "../ctrls/usersC.js";




const router = express.Router();

router.post("/",userRegister);

export default router;