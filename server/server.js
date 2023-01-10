const express = require('express');
const cors = require('cors')
require('dotenv/config')

const app = express();

//middelware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5445;

//router
const appRoute = require('./routers/route');
app.use('/expenses', appRoute);

//mongo connection
const conn = require('./dataBase/connection')

conn.then(db => {
    if(!db) return process.exit(1);

    //listan to the http server
    app.listen(PORT, ()=>{
        console.log('App is Running on the Port: '+ PORT )
    })

    //error in connect to the mongodb
    app.on('error', err => console.log(`Fail to connect http server: ${err}`));

}).catch(err => {
    console.log(`Connection Faild: ${err}`);
})
