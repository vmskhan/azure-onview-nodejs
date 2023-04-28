
const path=require('path');
const express=require("express");
const userRoutes=require('./routes/userRoutes');
const adminRoutes= require('./routes/adminRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const PORT = process.env.PORT || 3001;
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const morgan=require("morgan");


const app=express();
dotenv.config();
connectDB();
//require('./config/mongodbConnect').connect();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","*");
    next();
  });

app.use(express.json());
app.use(morgan('dev'));
app.use("/images",express.static(path.join(__dirname,"./storage/images")));

app.use(express.static(path.resolve(__dirname,'../build')));

app.get("/api",(req,res) =>{
    res.json({ message: "Hello from server!"});
});
app.use('/api/users',userRoutes);
app.use('/api/admin',adminRoutes);
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
  });

app.use(notFound);
app.use(errorHandler);
//all other get requess not handled before will return our react app 
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../client/build','index.html'));
// });

app.listen(PORT,() =>{
    console.log(`Server listening on.... PORT: ${PORT}`);
});
