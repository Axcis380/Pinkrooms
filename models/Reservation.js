const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    guestName: String,
    guestEmail: String,
    tableNumber: Number,
    time: Date,
    specialRequests: String,
});
module.exports = mongoose.model('Reservation', reservationSchema);
