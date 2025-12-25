import express from "express";
import { validateUser } from "../service/userSide.js";
import { buyTickets, UserPurchaseSummary } from "../ctrls/ticketsC.js";


const router = express.Router();

router.post("/tickets/buy",validateUser,buyTickets)
router.get("/:username/summary",validateUser,UserPurchaseSummary)


export default router;