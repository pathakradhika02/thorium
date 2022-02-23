const express = require("express");
const router = express.Router();


const player = [ {
    "name" : "Radhika" ,
    DOB : "1/4/98" ,
    Gender : "Female" ,
    City : "BulandShahr" ,
    Sports : [ "Swimming" ] ,
    Booking : []
} ,
{
    "name" : "Shivam" ,
    DOB : "4/10/99" ,
    Gender : "Male" ,
    City : "BulandShahr" ,
    Sports : [ "Cricket" ] ,
    Booking : []
} ,
{
    "name" : "Parul" ,
    DOB : "10/6/99" ,
    Gender : "Female" ,
    City : "Meerut" ,
    Sports : [ "Bedminton" ] ,
    Booking : []
} ,
{
    "name" : "Lovedeep" ,
    DOB : "1/4/98" ,
    Gender : "Male" ,
    City : "Noida" ,
    Sports : [ "Basketball" ] ,
    Booking : []
} ,
{
    "name" : "Charu" ,
    DOB : "18/10/02" ,
    Gender : "Female" ,
    City : "BulandShahr" ,
    Sports : [ "swimming" ] ,
    Booking : []
} ,
]


const booking = [
    {
        "BookingNo" : "1" ,
        SportID : "245654" ,
        CenterId : "7865" ,
        Type : "Private" ,
        Slot : "346797654327" ,
        BookedOn : "31/05/2020" 
    } ,
    {
        "BookingNo" : "2" ,
        SportID : "24538374" ,
        CenterId : "7278395" ,
        Type : "Private" ,
        Slot : "346797654837327" ,
        Bookedon : "03/09/2021" 
    } ,
    {
        "BookingNo" : "3" ,
        SportID : "2875654" ,
        CenterId : "787266265" ,
        Type : "Private" ,
        Slot : "9289797654327" ,
        Bookedon : "18/30/2021" 
    } ,
    {
        "BookingNo" : "4" ,
        SportID : "9282654" ,
        CenterId : "78682725" ,
        Type : "Private" ,
        Slot : "8286327654327" ,
        Bookedon : "09/08/2022" 
    } ,
    {
        "BookingNo" : "5" ,
        SportID : "245654" ,
        CenterId : "7865" ,
        Type : "Private" ,
        Slot : "346797654327" ,
        Bookedon : "18/09/2022" 
    } ,
]


router.post('/player', function( req , res ) {
    let newPlayer = req.body.name
    let flag = true
    for(let i=0 ; i<player.length ; i++){
        if(newPlayer === player[i].name ){
            flag = false 
            res.send("error : Invalid Entry")
         }
     }
     if( flag === true ){
            player.push(req.body)
            res.send( player )
     }
})


router.post('/booking/:name/:booking', function( req , res ) {
    const name = req.params.name
    let id = req.body.BookingNo
    let flag = true


    for(let i=0 ; i < ( player.length || booking.length ) ; i++){

        if( name !== player[i].name ){
            flag = false
            res.send("error : Player doesn't Exist ")
         }
    
        else if(id === booking[i].BookingNo){
            flag = false
            res.send ("error : Slote already Booked")
        }
    }

    if ( flag === true ){
       // player.push(req.body)
        res.send(playerForId)
    }
})


module.exports = router