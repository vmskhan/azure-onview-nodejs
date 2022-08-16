const mongoose=require('mongoose');

const zoomSchema = mongoose.Schema(
    {
        _id: {
            type:mongoose.SchemaTypes.ObjectId,
        },
        sdkKey:{
            type: String,
            required: true,
        },
        signature:{
            type:String,
            required: true,
            default: "",
        },
        meetingNumber:{
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        username:{
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);


const Zoom=mongoose.model("Zoom",zoomSchema);

module.exports=Zoom;