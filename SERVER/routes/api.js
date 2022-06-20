const express = require('express')
const router = express.Router()
const Favorite = require('../models/model')
const axios = require('axios')
const APIkey = require('../../src/Config')

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

router.get('/Media/APOD', function (req, res) {

    try {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
            .then(function (response) {

                res.send({
                    title: response.data.title,
                    description: response.data.explanation,
                    href: response.data.url
                })

            })
            .catch(function (error) {

                res.status(500).send("Server Error")

            })
    }
    catch
    {
        res.status(404).send('Error')
    }

})

router.get('/Media', function (req, res) {

    let value = req.query.value
    let results = []

    try {
        value ?
            axios.get(`https://images-api.nasa.gov/search?q=${value}`)
                .then(function (response) {

                    response.data.collection.items.slice(0, 20).forEach(result => {
                        
                        results.push({
                            title: result.data[0].title,
                            nasa_id: result.data[0].nasa_id,
                            date_created: result.data[0].date_created,
                            description: result.data[0].description,
                            href: result.links[0].href,
                        })
                    })

                    res.send(results)

                })
                .catch(function (error) {

                    res.status(404).send("Not Found")

                }) :
            res.status(400).send('Bad Request')
    }
    catch (error) {

        res.status(500).send('Server Error')

    }

})

router.get('/Media/Favorites', function (req, res) {

    Favorite.find({}, function (err, Favorites) {
        if (err) return err;
        res.send(Favorites)
    })

})

router.post('/Media/Favorites', function (req, res) {

    let Favor = new Favorite({
        title: req.body.params.title,
        nasa_id: req.body.params.nasa_id,
        date_created: req.body.params.date_created,
        description: req.body.params.description,
        href: req.body.params.href,
        isFavorites:true
    })

    Favor.save()
    res.end()

})

router.delete('/Media/Favorites', function (req, res) {

    let id = req.query.id

    Favorite.deleteOne({ nasa_id: id }, function (err, result) {

        if (err) {
            res.status(404).send('Error')
        }
        else if (result === 0) {
            res.status(404).send('Not Found!!')
        }

        res.status(200).send('deleted')
    });
})


module.exports = router;


