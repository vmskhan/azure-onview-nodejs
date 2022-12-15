const mongoose=require('mongoose');

const resultSchema = mongoose.Schema(
    {
        
        tid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        uid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        total:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);


const Result=mongoose.model("Result",resultSchema);

module.exports=Result;