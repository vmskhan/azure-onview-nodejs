const mongoose=require('mongoose');

const questionSchema = mongoose.Schema(
    {
       
        question:{
            type: Object,
            required: true,
            default:{
                text:{
                    type: String,
                    required: false,
                    default:"",
                } ,
                image:{
                    type:String,
                    required: false,
                    default: "",
                },
                format:{
                    type:String,
                    required:true,
                },
                hasText:{
                    type:Boolean,
                    required:true
                },
                hasImage:{
                    type:Boolean,
                    required:true
                }
            }
        },
        
        options:{
            type:Array,
            required:false,
            default:[]
        },
        answer:{
            type:Object,
            required:true,
            default:{
                text:{
                    type: String,
                    required: false,
                },
                image: {
                    type: String,
                    required: false,
                    default: "",
                },
                hasText:{
                    type:Boolean,
                    required:false
                },
                hasImage:{
                    type:Boolean,
                    required:false,
                },
                correctOptionId:{
                    type:Number,
                    required:false,
                }
            },
        },
        marks:{
            type: Number,
            required: true,
        },
        idx:{
            type:Number,
            required:true,
            default: 0,
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