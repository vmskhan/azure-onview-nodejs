const mongoose=require('mongoose');

const submissionSchema = mongoose.Schema(
    {
        _id: {
            type:mongoose.SchemaTypes.ObjectId,
        },
        qid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        tid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        uid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        choice: {
            type: String,
            required: true,
            default: "",
        },
        mark:{
            type: Number,
            required: true,
        },
        rightAnswer:{
            type:Number,
            required:true,
            default: 0,
        },
        state:{
            type:String,
            required:true,
        },   
    },
    {
        timestamps:true,
    }
);


const Submission=mongoose.model("Submission",submissionSchema);

module.exports=Submission;