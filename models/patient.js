const patientSchema = new mongoose.Schema({
    name: String,
    dob: Number,
});

module.exports = mongoose.model('Patient', patientSchema);
