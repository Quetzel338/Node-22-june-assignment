const express = require('express');
const router = express.Router();
const model = require('../model/schema');


// post request
router.post('/postData', async(req, res) =>{
    const data = new model({
        name : req.params.name,
        age:req.params.age,
        grade: req.params.grade
    })

    const savedData = await data.save();
    try{
        res.status(200).json(savedData);

    }catch(err){
        res.status(400, send({
            message : err
        }))
    }
})

// get All 
router.get('/getAll', async (req,res)=>{
    try{
        const data = await model.find();
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({
            message : err
        })
    }
})

// get one by id
router.get('/getOne/:id', async(req,res)=>{
    try{
        const data = await model.findById(req.params.id);
        res.status(200).json(data);
    }catch(err){
        res.status(400).json({
            message : err
        })
    }
})

// to update the records 
router.put('/update/:id', async(req,res)=>{
    try{

        const id = req.params.id;
        const updatedData = res.body;
        const options = {new : true}

        const newData =await model.findByIdAndUpdate(id,updatedData, options);
        res.status(200).json(newData);
    }catch(err){
        res.status(400).json({
            message : err
        })
    }
})

//to delete a student record 

router.delete('/delete/:id',async (req,res) => {
    try{
        const data = await model.findByIdAndDelete(req.params.id)
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
module.exports = router;

