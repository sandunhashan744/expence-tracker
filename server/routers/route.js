const router = require('express').Router();
const controller = require('../controllers/controller')

// router.get('/', (req, res) =>{
    
//     res.json("helloworld...!");
// })

router.post('/category', controller.createCategory);

router.get('/category', controller.getCategory);

router.post('/transaction', controller.createTransaction);

router.get('/transaction', controller.getTransaction);

router.delete('/transaction', controller.deleteTransaction);

router.get('/labels', controller.getLables);

module.exports = router;
