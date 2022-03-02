const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String ,
    author_Id : {
        type : String ,
        required : true
    } ,
    prices: String,
    rating : Number
    
}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema) 
