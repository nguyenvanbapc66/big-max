const mongoose = require('mongoose')

const HomeStaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`],
        unique: true
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'address'!`]
    },
    description: {
        type: String,
        required: [true, `Yêu cầu 'description'!`]
    },
    price: {
        type: Number,
        required: [true, `Yêu cầu 'price'!`]
    }
})

module.exports = mongoose.model('HomeStay', HomeStaySchema)