const express = require('express');
const router = express.Router();
const axios = require('axios');
// const {Client} = require("@googlemaps/google-maps-services-js");

// const client = new Client({});

// client
//   .elevation({
//     params: {
//       locations: [{ lat: 45, lng: -110 }],
//       key: "asdf",
//     },
//     timeout: 1000, // milliseconds
//   })
//   .then((r) => {
//     console.log(r.data.results[0].elevation);
//   })
//   .catch((e) => {
//     console.log(e.response.data.error_message);
//   });

router.get('/', async (req, res) => {
    res.send('Restaurants appear here!');
});

router.get('/:city', async (req, res) => {
    let restaurants = getRestaurants(req.params.city);
    res.send({restaurants});
});

async function getRestaurants(city) {
    try {
        let response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+' + city + '&key=' + process.env.PLACES_KEY);
        return response.data.results[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = router;