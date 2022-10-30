const mongoose = require('mongoose');
//const env=require("../environment/environment")

mongoose.Promise=global.Promise;

//const mongoUri=`mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${env.dbName}@`
if(!process.env.DATABASE_URL){
    throw new Error("no value in DATABASE_URL in env var");
}
const mongoUri=process.env.DATABASE_URL;
function connect(){
    return mongoose.connect(mongoUri);
}

module.exports={connect,mongoose};