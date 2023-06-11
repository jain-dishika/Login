import express from "express"
import cors from "cors"
import morgan from "morgan"
import connect from "./database/conn.js"
import router from "./Router/route.js"
// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const connect = require("./database/conn.js")
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by')

const port = 8080;

app.get('/', (req, res)=>{
    res.status(201).json("Home Get Request");
});

// api route
app.use('/api', router)
// app.use('/api', require("./Router/route.js"))

// start server only when valid connection
connect().then(()=>{
    try{
        app.listen(port, ()=>{
            console.log(`Server Connected to ${port}`);
        })
    }catch(error){
        console.log(`Server cannot Connected `);
    }
}).catch(error => {
    console.log(`Invalid Db`);
})
