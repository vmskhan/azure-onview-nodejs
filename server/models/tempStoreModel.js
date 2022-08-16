const mongoose=require('mongoose');

const tempStoreSchema = mongoose.Schema(
    {
        _id: {
            type:mongoose.SchemaTypes.ObjectId,
        },
        uid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        tempval:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },       
    },
    {
        timestamps:true,
    }
);


const TempStore=mongoose.model("TempStore",tempStoreSchema);

module.exports=TempStore;