const mongoose = require('mongoose')
const Schema = mongoose.Schema


const patientSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    surname: { type: String, required: true},
    dob: {
        type: Date,
        default: function () {
          return new Date;
        }, required: true,
      },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: Number, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);
