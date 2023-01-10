const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// this is for category
const categories_model = new Schema({
    type:{
        type:String,
        default:'Investment'
    },
    color:{
        type:String,
        default:'#FCBE44'
    }
});

// this is for transaction
const transactions_model = new Schema({
    name:{
        type:String,
        default:'Anonymous'
    },
    type:{
        type:String
    },
    amount:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Category = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transactions_model)

exports.default = Transaction;

module.exports={
    Category,
    Transaction
}