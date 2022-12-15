const mongoose=require('mongoose');

const participationSchema = mongoose.Schema(
    {
       
        tid:{
            type:mongoose.SchemaTypes.ObjectId, 
            required: true,
        },
        uid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        last_attempted:{
            type: Number,
            required: true,
        },
         paymentDone: {
            type: Boolean,
            required: true,
        },
        score:{
            type: Number,
            required: true,
        },
        totalQn:{
            type:Number,
            required:true,
            default: 0,
        }, 
    },
    {
        timestamps:true,
    }
);


const Participation=mongoose.model("Participation",participationSchema);

module.exports=Participation;