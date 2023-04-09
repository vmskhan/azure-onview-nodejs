
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
app.use(express.json());
app.use(morgan('dev'));
app.use("/upload",express.static("./../uploads"));

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
