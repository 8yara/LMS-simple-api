const express = require('express')
const router =new express.Router()
const Student =require('../models/student')

router.get('/students',(req,res)=>{
    res.sendFile(__dirname+'/student.html')
})
//create a student
router.post('/web/students/create', async (req, res) => {
    const student = new Student(req.body)
    try{
            await student.save()
            res.status(201).send(student)
        }catch(e){
            res.status(400).send(e)
        }
    
    })
   //read a student by it's name 
    router.get('/web/students/read/:name', async (req ,res)=>{
        try{
            const student = await Student.findOne({name:req.params.name})
            if(!student){
                return res.status(404).send()
            }
            res.send(student)
        }catch(e){
            res.status(500).send()
        }
    })


    router.patch('/web/students/update/:code',async(req,res)=>{
        const updates=Object.keys(req.body)
        const allowedUpdates=['name']
         const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
         if(!isValidOperation){
            return res.status(400).send({error:'Invalid updates!'})
        }
    
        try{
            const student= await Student.findOne({code:req.params.code})
            updates.forEach((update)=>{//loop over the updates array
                student[update]=req.body[update]//and change what ever paramter that changes to the user
            })
            await student.save()
    
            if(!student){
            return res.status(404).send()
            }
            res.send("updated!")
        }catch(e){
            res.status(400).send(e)
        }
    })

//delete a student
router.delete('/web/students/delete/:name',async(req,res)=>{
    try{
        const student=await Student.findOneAndDelete({name:req.params.name})
        if(!student){
            return res.status(404).send()
        }
        res.send("deleted!")
    }catch(e){
        res.status(500).send()
    }
})


module.exports = router
