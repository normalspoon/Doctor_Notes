const mongoose = require('mongoose')
const Schema = mongoose.Schema


const patientSchema = new mongoose.Schema({
    name: String,
    dob: Number,
    address: String,
    email: String,
    PhoneNo: String,
});

module.exports = mongoose.model('Patient', patientSchema);
