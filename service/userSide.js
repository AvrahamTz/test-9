import fs from "fs/promises"
 
const validateUser = async (req, res, next) => {
    
    const auth = await usersList.find((user)=>user.username === req.body.username && user.password === req.body.password )
    if (auth){
        next();
    } else {
        res.sendStatus(401)
    }
}
const loadFromFile =async(filename)=> {
  const arr = await fs.readFile(filename, "utf8");
  return JSON.parse(arr);
}
const saveToFile =(filename, data)=> {
  fs.writeFile(filename, JSON.stringify(data, null, 2));
}
const usersList = await loadFromFile("../data/users.json")
 export {   
    validateUser,
    loadFromFile,
    usersList,
    saveToFile

}
