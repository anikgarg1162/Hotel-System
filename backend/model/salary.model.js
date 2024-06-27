const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
    StaffID: { type: String, required: true },
    Name: { type: String, required: true },
    Role: { type: String, required: true },
    BaseSalary: { type: Number, required: true },
    Overtime: { type: Number, required: true },
    Bonus: { type: Number, required: true },
    PaymentDate: { type: Date, required: true },
    Status: { type: String, required: true }
});

module.exports = mongoose.model("Salary", salarySchema); // Capitalize the model name
