const mongoose=require('mongoose');

const answerSchema = mongoose.Schema(
    {
        _id: {
            type:mongoose.SchemaTypes.ObjectId,
        },
        answerText:{
            type: String,
            required: true,
        },
        answerImage:{
            type:String,
            required: true,
            default: "",
        },
        qid:{
            type:mongoose.SchemaTypes.ObjectId,
            required: true,
        },       
    },
    {
        timestamps:true,
    }
);


const Answer=mongoose.model("ANswer",answerSchema);

module.exports=Answer;