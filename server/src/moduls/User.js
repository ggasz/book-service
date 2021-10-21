const mongoose = require('mongoose')
const book = require('./Book')

const userSchema = mongoose.Schema({
    name:{type: String, required: true, trim : true},
    age:{type: String, required: true, trim : true},
    email:{type: String, required: true, trim: true},
    books:{type:[book], required : true, trim: true}
})

const Book = mongoose.model('User',userSchema)
module.exports = User;