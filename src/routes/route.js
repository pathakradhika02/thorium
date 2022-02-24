const express = require('express');
const router = express.Router();


let players= [
    {
        "name": "abhishek",
        "dob": "11/08/1998",
        "gender": "male",
        "city": "noida",
        "sports": ["tennis"],
        "bookings": [{
            "bookingNumber": "1",
            "sportId": "1" ,
            "centerId": "1" ,
            "type": "private",
            "slot": "16286598000000",
            "bookedOn": "31/08/2021",
            "bookedFor": "01/09/2021"
            }]
        },
 {
     "name": "manish",
      "dob": "1/1/1995",
      "gender": "male",
      "city": "jalandhar",
      "sports": ["swimming"],
         "bookings": [{
            "bookingNumber": "2",
            "sportId": "2" ,
            "centerId": "2" ,
            "type": "private",
            "slot": "16286598000001",
            "bookedOn": "30/07/2021",
            "bookedFor": "01/10/2021"
            }]
            },
         {
             "name": "satish",
             "dob": "21/12/1995",
             "gender": "male",
             "city": "gurugram",
             "sports": ["cricket"],
             "bookings": [{
                "bookingNumber": "3",
                "sportId": "3" ,
                "centerId": "3" ,
                "type": "private",
                "slot": "16286598000002",
                "bookedOn": "31/06/2021",
                "bookedFor": "11/07/2021"
                }]
                }, 
                {
                    "name": "piyush",
                    "dob": "25/12/1995",
                    "gender": "male",
                    "city": "patiala",
                    "sports": ["boxing"],
                    "bookings": [{
                        "bookingNumber": "4",
                        "sportId": "4" ,
                        "centerId": "4" ,
                        "type": "private",
                        "slot": "16286598000003",
                        "bookedOn": "31/08/2021",
                        "bookedFor": "01/09/2021"
                        }]
                    },
                    {
                        "name": "rakesh",
                        "dob": "16/07/1997",
                        "gender": "male",
                        "city": "meerut",
                        "sports": ["basketball"],
                        "bookings": [{
                            "bookingNumber": "5",
                            "sportId": "5",
                            "centerId": "5" ,
                            "type": "private",
                            "slot": "16286598000004",
                            "bookedOn": "31/04/2021",
                            "bookedFor": "03/07/2021"
                            }]
                        }
]

router.post("/players", function(req, res) {
    let value= req.body.name
    let flag= true
    for (let i=0; i<players.length; i++){
        if(players[i].name===value){
            flag= false
            res.send("Error player name already exist");
        }
    }
            
        
        if(flag === true){
            players.push(req.body);
            res.send(players);
        }
    
})



router.post("/:playerName/bookings/:bookingId", function(req, res) {
    let name= req.params.playerName
    let id= req.params.bookingId
    let value= req.body
    for (let i=0;i<players.length; i++){
        if(players[i].name == name){
            let arr= players[i].bookings
            if(arr.length===0){
                arr.push(value)
                res.send(players)
            }else {
                for (let j=0; j<arr.length; j++){
                    if(arr[j].bookingNumber != id){
                        arr.push(value)
                        res.send(players)    
                    }else{
                        res.send("booking ID already exists")
                    }
                }
            }
        }
    }
    res.send("name does not exist")

})

module.exports = router;