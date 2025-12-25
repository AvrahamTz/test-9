import express from "express";
import { validateUser } from "../service/userSide.js";
import { createEvent } from "../ctrls/eventsC.js";


const router = express.Router();

router.post("/",validateUser,createEvent);

export default router;