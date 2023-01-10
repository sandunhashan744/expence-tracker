const Model = require('../models/model')

//Post Category
async function createCategory(req, res){
    const Create = new Model.Category({
         type:"Expense",
         color:"#FCBE99"
    })

    await Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message: `Error Creating Category ${err}`})
    });
}

//Get Category
async function getCategory(req, res){
    let data = await Model.Category.find({});

    //filter the asensial thins
    let filter = await data.map(v=>Object.assign({},{type:v.type, color:v.color}))  
    return res.json(filter);
}

//POST Transaction
async function createTransaction(req, res){
    if(!req.body) return res.json('There is an empty');

    let {income,type,amount} = req.body;
   console.log(req.body);

    const createTransaction = await Model.Transaction({
        name:income,
        type,
        amount,
        date:new Date()
    });

    createTransaction.save(function(err){
        if(!err) return res.json(createTransaction);

        return res.status(400).json({
            message:`Error while Creating Transaction ${err}`});
    })
}

//Get Transaction
async function getTransaction(req, res){
    let data = await Model.Transaction.find({});

    //filter the asensial thins
   // let filter = await data.map(v=>Object.assign({},{type:v.type, color:v.color}))  
    return res.json(data);
}

//delete Transaction
async function deleteTransaction(req, res){
    if(!req.body) return res.status(400).json({ message: 'The record is not founded'})

    await Model.Transaction.deleteOne(req.body,function(err){
        if(!err) return res.json('Record Deleted!')
    })
    .clone()
    .catch(function(err) {
        res.json("Error while deleting Transaction")
    })
}

//get lables (agrigrate)
async function getLables(req, res){
    Model.Transaction.aggregate([
        {
            $lookup:{
                from:"categories",
                localField:"type",
                foreignField:'type',
                as:"category_info"
            }
        },
        {
            $unwind:"$category_info"
        }
    ]).then(result=>{
        //get the nessesary data
        let data = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.category_info['color']}))  
        
        res.json(data)
    }).catch(err=>{
        res.status(400).json(`Lookup collection error ${err}`)
    })
}

module.exports = {
    createCategory,
    getCategory,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLables
}