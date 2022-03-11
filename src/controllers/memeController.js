let axios = require("axios")

const getmemes = async function( req ,res ) {
    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options)
        res.status(200).send({ status : true , msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const createMeme = async function( req ,res ) {
    try {
        const template_id = req.query.template_id
        const text0 = req.query.text0
        const text1 = req.query.text1
        const username = req.query.username
        const password = req.query.password

        let options = {
            method : 'post' ,
            url : `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios( options )
        res.status(200).send({ status :true , data : result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getmemes = getmemes
module.exports.createMeme = createMeme