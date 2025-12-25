import { loadFromFile, saveToFile } from "../service/userSide.js"

export const  createEvent = async (req, res) => {
    try {
     const events =await loadFromFile("../data/events.json")
     const event = {
     eventName : req.body.eventName,
     ticketsAvailable : req.body.ticketsForSale,
     createdBy : req.body.username
     }
     events.push(event)
     await saveToFile("../data/events.json",events)
     req.send({"message": "Event created successfully"}) 
    } catch (error) {
        req.send("failed to save event")
    }


}
