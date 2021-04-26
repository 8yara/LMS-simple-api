const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Collage-lms_API', {
    useNewUrlParser: true,
    useCreateIndex: true
})

