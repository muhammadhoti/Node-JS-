const express  = require('express');

const router = express.Router();

const Users = require("../model/Users.js");

router.get('/getAll',(req,res)=>{
    console.log(req.query.name)
    console.log("getAll API********")
    Users.find({}).
    then(
        (result) => {
            res.send(result)
        }
    )
})

router.post("/addUser", (req, res) => {
    console.log(req.body);
    const user = new Users(req.body);
    user.save().then(
        console.log("Working")
    )
  });
    
    router.put("/updateName", (req, res) => {
        console.log("updateName chal raha ha")
        console.log("req.body", req.body)
        Users.updateOne({email : req.body.email}, { $set: { name : req.body.name } } )
    })
    
    router.delete("/removeUser", (req, res) => {
        console.log("remove age chal raha ha")
        console.log("req.body", req.body)
        Users.collection.deleteOne({ "email" : req.body.email })
    })

    


module.exports = router;