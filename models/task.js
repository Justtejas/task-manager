const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please add a name'],
        trim:true,
        maxLength:[14,'Name cannot be more than 14 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }

});






module.exports = mongoose.model('Task',TaskSchema);

