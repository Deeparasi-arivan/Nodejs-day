import express from "express"
//importing space


//declaration/initailization
const app = express();
const PORT = 4000;


//middleware
app.use(express.json())

//routes
app.get('/',(req,res) => {
 //res.status(200).json({message:"hi all welcome to our first node app"})
 res.status(200).send(`<div style="background-color:pink;color:black"><h1>welcome to our first app in nodejs</h1></div>`)
})


//running port
app.listen(PORT,()=> (
    console.log(`app is listening on the pert  ${PORT}`)
))