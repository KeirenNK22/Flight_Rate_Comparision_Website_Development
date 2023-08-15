const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusSchema = new Schema({
    companyName: {
        type: String
    },
    busType: {
        type: String
    },
    flightType:{
        type:String,
        required:true
    },

    busNumber: {
        type: String
    },
    startCity: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    },
    flightDate:{
        type:String,
        default:""
    }
}, {collection: "buses"})

const bus = mongoose.model('bus', BusSchema)

module.exports = bus;