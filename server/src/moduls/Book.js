const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title:{type: String,required: true,trim: true}, //제목
    auther:{type: String, required : true, trim: true}, //저자
    summary:{type: String,trim : true}, //요약
    genre:{type: String, trim: true},   //장르
    release:{type: String, require: true, trim: true},  //발매일12
    isbn:{type: Number, require: true, trim: true}  //표준도서
})

const Book = mongoose.model('Book',bookSchema)
module.exports=Book;    