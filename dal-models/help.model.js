const mongoose=require('mongoose');

const helpSchema=new mongoose.Schema({
    id:Number,
    location_id:Number,
    problem:String,
    phone:String,
    status_id:Number,
    num_of_people:Number,
    priority_id:Number,

    });
const Help=mongoose.model('help_requests',helpSchema);
module.exports=Help;