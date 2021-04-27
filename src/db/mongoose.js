const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yara:25819982581998@cluster0.fvbez.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})

