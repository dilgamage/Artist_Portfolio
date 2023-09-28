const mongoose = require("mongoose");



const Schema = mongoose.Schema;
const EventSchema = new Schema({


    event_name: {
        type: String,
        required: true,
        trim: true,
    },


    date: {
        type: Date,
        required: true,
        
    },

    time: {
        type: String,
        required: true,
    },


    location: {
        type: String,
        required: true,
    },


    description: { 
        type: String,
        required : true,
        trim: true,
    }
    
})


const Event = mongoose.model("Event", EventSchema);
module.exports = Event;