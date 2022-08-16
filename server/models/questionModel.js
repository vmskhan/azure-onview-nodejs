const mongoose=require('mongoose');

const questionSchema = mongoose.Schema(
    {
        _id: {
            type:mongoose.SchemaTypes.ObjectId,
        },
        questionText:{
            type: String,
            required: true,
        },
        questionImage:{
            type:String,
            required: true,
            default: "",
        },
        answerText:{
            type: String,
            required: true,
        },
        answerImage: {
            type: String,
            required: true,
            default: "",
        },
        mark:{
            type: Number,
            required: true,
        },
        idx:{
            type:Number,
            required:true,
            default: 0,
        },
        questionFormat:{
            type:String,
            required:true,
        },
        tid:{
            type:mongoose.SchemaTypes.ObjectId,
            required:true,
        },       
    },
    {
        timestamps:true,
    }
);


const Question=mongoose.model("Question",questionSchema);

module.exports=Question;