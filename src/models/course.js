const mongoose = require('mongoose')

const courseSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength:5
    },
    code: {
        type: String,
        required:true,
        match:/[a-zA-Z]{3}\d{3}/
    },
    description:{
        type:String,
        maxLength:200
    }
})

const Course = mongoose.model('Course',courseSchema )

module.exports = Course
