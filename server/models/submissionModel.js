const mongoose=require('mongoose');

const submissionSchema = mongoose.Schema(
    {
        tid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        uid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        submissions:{
            type:Array,
            required: true,
            default:[{
                qid:{
                    type:mongoose.SchemaTypes.ObjectId,
                    required: true,
                },
                choice: {
                    type: String,
                    required: true,
                    default: "",
                },
                marks:{
                    type: Number,
                    required: true,
                },
                rightAnswer:{
                    type:String,
                    required:true,
                    default: "0",
                },
                evaluationStatus:{
                    type:String,
                    required:true,
                    default: "0",
                },
                answerStatus:{
                    type:String,
                    required:true,
                    default: "0",
                }
        },
    ],
        },
        totalMarks:{
            type: Number,
            required: true,
        },
        submissionState:{
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