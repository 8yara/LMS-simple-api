const mongoose = require('mongoose')

const studentSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match:/^[a-zA-Z](?:[ '\-a-zA-Z]*[a-zA-Z])?$/
    },
    code:{
        type:String,
        minLength:7,
        maxLength:7
    }
  
})

const Student = mongoose.model('Student',studentSchema )

module.exports = Student