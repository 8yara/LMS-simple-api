const express = require('express')
const router =new express.Router()
const Course=require('../models/course')

router.get('/api/courses',(req,res)=>{
    res.sendFile(__dirname+'/course.html')
})

//create a course
router.post('/web/courses/create',async (req,res)=>{
    const course= new Course(req.body)
    try{
        await course.save()
        res.status(201).send(course)
    }catch(e){
        res.status(400).send(e)
    }
   
})

   //read a course by it's name 
   router.get('/web/courses/read/:name', async (req ,res)=>{
    try{
        const course = await Course.findOne({name:req.params.name})
        if(!course){
            return res.status(404).send()
        }
        res.send(course)
    }catch(e){
        res.status(500).send()
    }
})

//update an existing course by it's name in url and data in body
router.patch('/web/courses/update/:name',async(req,res)=>{
        const updates=Object.keys(req.body)
        const allowedUpdates=['code','description']
         const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
         if(!isValidOperation){
            return res.status(400).send({error:'Invalid updates!'})
        }
    
        try{
            const course= await Course.findOne({name:req.params.name})
            updates.forEach((update)=>{//loop over the updates array
                course[update]=req.body[update]//and change what ever paramter that changes to the user
            })
            await course.save()
    
            if(!course){
            return res.status(404).send()
            }
            res.send("updated!")
        }catch(e){
            res.status(400).send(e)
        }
    })

//delete a course
router.delete('/web/courses/delete/:name',async(req,res)=>{
try{
    const course=await Course.findOneAndDelete({name:req.params.name})
    if(!course){
        return res.status(404).send()
    }
    res.send("deleted!")
}catch(e){
    res.status(500).send()
}
})

module.exports = router