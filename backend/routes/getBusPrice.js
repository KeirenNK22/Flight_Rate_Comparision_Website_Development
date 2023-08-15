var express = require('express');
var router = express.Router();
var bus = require('../models/Buses');

router.get('/:Bid',async(req, res) =>{



try {
    const g= await bus.findOne({ busNumber: req.params.Bid})
   res.json(g)
} catch (error) {
    res.json({ status: false, message: "error while searching" })
}

 
  
})







module.exports = router;
