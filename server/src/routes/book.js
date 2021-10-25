const express = require('express')
const BookRouter = express.Router()
const Book = require('../moduls/Book')

BookRouter.get('/', async (req, res)=>{
    const books = await Book.find()
    console.log(books)
    res.json({status:200, books})
})

BookRouter.get('/:id',(req, res)=>{
    Book.findById(req.params.id,(err,todo)=>{
        if(err) throw err;
        res.json({status: 200, book})
    })
 })

BookRouter.post('/',(req, res)=>{    
    Book.findOne({ isbn: req.body.isbn}, async(err,book)=>{
        if(err) throw err;
        if(!book){
            const newBook = new Book(req.body);
            await newBook.save().then( ()=>{
                res.json({status:201, msg:'new book  created in db!', newBook})
            })
        }else{
            const msg = 'this book already exists in db !'
            console.log(msg)
            res.json({status: 204, msg})
        }
    })
})

BookRouter.put('/:id',(req, res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body,{new: true},(err,book)=>{
        if(err) throw err;
        res.json({status: 204, msg : `book${req.params.id} updated in db!`, book})
    })
})

BookRouter.delete('/:id',(req, res)=>{
    Book.findByIdAndDelete(req.params.id,(err, book)=>{
        if(err) throw err;
        res.json({ status: 204, msg:`Book ${req.params.id} removde in db!`})
    })
})

module.exports = BookRouter;  