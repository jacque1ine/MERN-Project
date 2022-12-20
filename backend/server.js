const express = require('express') //backend
const dotenv = require('dotenv').config(); //allow us to have a dotenv file wiht our variables in it 
const port =  process.env.PORT || 5000 //gets PORT variable from .env file and sets that to the port we want our server to run on. 
//^^will run on port 5000 IF PORT variable in .env file is not found

const app = express()

//when you hit api/goals it will look in goalRoutes files
app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Sever started on port ${port}`))
