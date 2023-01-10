const mongoose = require('mongoose');

const con = mongoose.connect(process.env.MONGO_URL)
.then(db => {
    console.log('Conection successfull');
    return db;
}).catch(err => {
    console.log(err)
})

module.exports = con;