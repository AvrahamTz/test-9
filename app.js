import express from "express";
import usersRoutes from "./routes/usersR.js"
import ticketsRoutes from "./routes/ticketsR.js"
import eventsRoutes from "./routes/eventsR.js"
const port = 3000;
app.use(express.json());

// users routes
app.use("/user/register", usersRoutes);
// posts routes
app.use("/creator/events", eventsRoutes);

app.use("/users",ticketsRoutes)


app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})