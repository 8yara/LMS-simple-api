const express = require('express')
require('./db/mongoose')
const Course = require('./models/course')
const Student = require('./models/student')
const courseRouter=require('./routers/course')
const studentRouter=require('./routers/student')


const app = express()

const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(courseRouter)
app.use(studentRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
    
})
