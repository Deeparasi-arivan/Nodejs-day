import express from "express"
import fs from 'fs';
import { format } from "date-fns";
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
app.get("/data",(req,res)=>{
   res.status(200).send(`<div style="background-color:pink;color:black"><h1>welcome to our first endpoint</h1></div>`) 
})
app.get('/create-read',(req,res)=>{
    let today = format(new data(),'dd-mm-yyyy-HH-mm-ss')
    //console.log(today);

const filePath =`Timestamp/${today}.txt`
fs.writeFileSync(filePath,`${today}`,'utf8')
let data = fs.readFileSync(filePath,'utf8')
res.status(200).send(data)
})

//running port
app.listen(PORT,()=> (
    console.log(`app is listening on the pert  ${PORT}`)
))