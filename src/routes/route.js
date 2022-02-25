const express = require('express');
const router = express.Router();


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a
// {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, 
// change votingStatus as true
// also return an array consisting of only the person that can vote


let persons= [
    {
    name: "Radhika",
    age: 19,
    votingStatus: false
},
{
    name: "Shivam",
    age: 17,
    votingStatus: false
},
{
    name: "Lovedeep",
    age: 22,
    votingStatus: false
},
{
    name: "Parul",
    age: 9,
    votingStatus: false
},
{
    name: "Lavi",
    age: 40,
    votingStatus: false
}
]


router.post("/post-query", function (req, res) {
    let newAge = req.query.votingAge

    for(let i=0 ; i<persons.length ; i++){
        if(persons[i].age >= newAge){
            persons[i].votingStatus = true
        }
    }

    persons = persons.filter(per => per.age >= newAge )
    res.send({ persons })
})


module.exports = router;