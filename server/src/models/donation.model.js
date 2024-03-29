const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    charity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Charity',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Donation', donationSchema);