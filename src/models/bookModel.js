const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String ,
        required : true 
    } ,
    authorName : String ,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year : {
        type : String ,
        default : 2021
    } ,
    tages : [  String ] ,
    pages : Number ,
    stockAvailable : Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 