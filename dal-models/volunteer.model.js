const mongoose=require('mongoose');

const volunteerSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    telphone_number: String,
    specializations: [String]
});
const Volunteer=mongoose.model('volunteers',volunteerSchema)

module.exports=Volunteer