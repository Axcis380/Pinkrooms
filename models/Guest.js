const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    preferences: String,
});
module.exports = mongoose.model('Guest', guestSchema);
