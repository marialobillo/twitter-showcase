const Twit = require('twit');
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 9000;
const cors = require('cors');
const path = require('path');
const dateHelper = require('./helpers/date-helpers');


const app = express();


let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

function respondSearch(req, res) {
    const { input = '' } = req.query;

    let params = {
        q: input,
        count: 19,
        lang: 'eu'
    };


    T.get('search/tweets', params, (err, data, response) => {
        const tweets = data.statuses.map(twett => {
            let datatwett = {};
            datatwett.profile_image_url = twett.user.profile_image_url;
            datatwett.screen_name = twett.user.screen_name;
            datatwett.name = twett.user.name;
            datatwett.text = twett.text;
            datatwett.created_at = dateHelper.handleDate(twett.created_at);
            datatwett.retwett_count = twett.retweet_count;
            datatwett.favorite_count = twett.favorite_count;
            datatwett.id = twett.id;

            return datatwett;
        })
        res.json(tweets);
    });

}

function respondUserTwetts(req, res) {
    const { input = "" } = req.query;
    var options = {
        screen_name: input,
        count: 20
    };
   
    T.get('statuses/user_timeline', options, (err, data) => {
        const dataSearch = data.map(twett => {
            let datatwett = {};
            datatwett.profile_image_url = twett.user.profile_image_url;
            datatwett.screen_name = twett.user.screen_name;
            datatwett.name = twett.user.name;
            datatwett.text = twett.text;
            datatwett.created_at = dateHelper.handleDate(twett.created_at);
            datatwett.retwett_count = twett.retweet_count;
            datatwett.favorite_count = twett.favorite_count;
            datatwett.id = twett.id;

            return datatwett;
        })
        let randomNumber = Math.floor(Math.random() * 20);
        res.json(dataSearch[randomNumber]);
    })
}


app.use(cors());

app.get('/search/*', respondSearch);
app.get('/users/*', respondUserTwetts);

// For React
app.use(express.static(path.join(__dirname, 'build')))
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    }
    )
}

//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
    console.log(`Server listening on port: ${port}`);
});


