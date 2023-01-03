const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const tasks = require('./routes/task');
const port = process.env.PORT || 3000;
const connectDB = require('./db/db');
const notFound = require('./middleware/notfound');
const errorHandler = require('./middleware/errorhandler');
//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
   
app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandler)
const start = async () => {
    try{
        await connectDB(process.env.DB_URI)
        app.listen(port,console.log(`Listening on the port ${port}`));
    } catch(error){
        console.log(error);
    }
}

start();

