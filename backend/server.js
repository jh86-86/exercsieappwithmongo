const  express= require('express');
const cors= require('cors');
const mongoose= require('mongoose'); //helps use connect to mongoose database

require("dotenv").config(); 

const app = express();
const port= process.env.PORT || 5000;

app.use(cors()); //middlewear
app.use(express.json());


const uri= process.env.ATLAS_URI;//my database
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true}
);

const connection= mongoose.connection;
connection.once('open', ()=>{
    console.log("Mongoose database connection successfully");
});

const exercisesRouter= require('./routes/exercises');
const usersRouter= require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});