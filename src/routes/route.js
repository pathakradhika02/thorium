const express = require('express');
const router = express.Router();

router.get('/movies', function(req,res) {
    const value= ["Hera Pheri","Golmaal","Simba","Don"]
    res.send(value)
})

router.get('/movies/:index',  function(req,res){
    const arr= ["Hera Pheri","Golmaal","Simba","Don"]
    const value= req.params.index
    res.send(arr[value])
})

router.get('/moviez/:index',  function(req,res){
    const arr= ["Hera Pheri","Golmaal","Simba","Don"]
    const value= req.params.index
    if (value>arr.length-1){
        res.send("error, use a valid index")
    }
    else{
        res.send(arr[value])
    }
    
})

router.get('/films', function(req,res){
    const arr= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       res.send(arr)
       
})


router.get('/films/:id', function(req, res) {
    const arr= [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
    let value = req.params.id
    for (i=0; i>arr.length; i++){
        if (arr[i].id===value){
            res.send(arr[i].name)
        }
        break
    }
    
})




module.exports = router;