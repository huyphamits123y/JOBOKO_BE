const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, },
        phone: { type: Number },
        address: { type: String },
        dateofbirth: { type: Date },
        gender: { type: Boolean },
        maritialstatus: { type: Boolean },
        profession: { type: String },
        position: { type: String },
        location: { type: String },
        salaryfrom: { type: Number },
        salarycome: { type: Number },
        desire: { type: String },
        cv: [
            {

                id: { type: Number, required: true },
                title: { type: String, required: true },
                fileUrl: { type: String, required: true },
                uploadTime: { type: Date, required: true },
            },
        ],


    },
    {
        timestamps: true
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User;