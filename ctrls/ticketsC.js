import { saveToFile } from "../service/userSide"

export const  buyTickets= async (req, res) => {
    const events =await loadFromFile("../data/events.json")
    const index = await events.findIndex((event)=>event.eventName === req.body.eventName)
    if (index !== -1){
        if (req.body.quantity<= events[index].ticketsAvailable){
            const recipts = await loadFromFile("../data/receipts.json")
            events[index].ticketsAvailable -= req.body.quantity
            const recipt = {
                username : req.body.username,
                eventName : req.body.eventName,
                ticketsBought : req.body.quantity
            }
            recipts.push(recipt)
            await saveToFile("../data/receipts.json",recipts)
            res.send({ "message": "Tickets purchased successfully"})

        }else{
            res.sendStatus(422)
        }
    }else{
        res.sendStatus(401)

    }}
export const  UserPurchaseSummary =async(req,res)=>{
    const recipts = await loadFromFile("../data/receipts.json")
    const byUser = recipts.filter((recipt)=>recipt.username === req.params)
    if(byUser){
        let sum = 0
        let arrOfEvents = []
        for(let i = 0; i<byUser.length; i++){
            sum += byUser[i].ticketsBought
            arrOfEvents.push(byUser[i].eventName)
        }
        return res.send({
            "totalTicketsBought": sum,
            "events": arrOfEvents,
            "averageTicketsPerEvent": sum/byUser.length
        })

    }else{
        res.send(byUser)
    }

}
