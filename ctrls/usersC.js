import {usersList,saveToFile }  from "../service/userSide.js"

export const  userRegister = async (req, res) => {
    const doubleCheck =await usersList.find((user)=> user.username === req.body.username)
    if (!doubleCheck){
        usersList.push(req.body)
        saveToFile("../data/users.json",usersList)
        req.send({"message": "User registered successfully"})
    }else{
        res.sendStatus(409)
    }
}