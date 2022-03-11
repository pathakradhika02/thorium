let axios = require("axios")

const weatherofLondon = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    }
    catch (error) {
        console.log(error.message)
        res.stutus(500).send({ error: error.message })
    }
}




const getTempLondon = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send({ error: error.message })
    }
}




const sortCityTemp = async function (req, res) {
    try {
        let city = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let id = req.query.appid

        let finalCity = []
        for (let i = 0; i < city.length; i++) {

            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${id}`)
            finalCity[i] = { city : city[i] , temp : options.data.main.temp} 

        }
        sortedCity = finalCity.sort( function ( a, b ) {
            return a.temp - b.temp
        })
        res.status(200).send({ msg: finalCity})
    }
    catch (error) {
        console.log(error.message)
        res.status(500).send({ error: error.message })
    }
}


module.exports.weatherofLondon = weatherofLondon
module.exports.getTempLondon = getTempLondon
module.exports.sortCityTemp = sortCityTemp
