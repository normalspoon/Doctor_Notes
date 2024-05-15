const mongoose = require('mongoose')
const Schema = mongoose.Schema


const patientSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    dob: Number,
    address: String,
    email: String,
    phoneNo: String,
});

module.exports = mongoose.model('Patient', patientSchema);
