const Twit = require('twit');
//const axios = require('axios');
const fetch = require('cross-fetch');

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

let T = new Twit({
    consumer_key: 'ljFxeJBqmaKhyLcGjNVeOZNZU',
    consumer_secret: 'CojBFeX6Tge8kVTwcF1B6CtxuJHIyca2A3cgwX6FSjKheaMcpW',
    access_token: '60619926-1UwW0bEGpMzJnFxctsXhCKaB48YMPdvLC70Im2cm2',
    access_token_secret: '9kQmJjxmiwAmfvIx0EDc8yHJFniMP6fptfyM8x3Tmt6rS'
});


let params = { 
    q: 'banana', 
    count: 2, 
    lang: 'eu'
};
const datasearch = [];

function gotData(err, data, response) {
    
    data.statuses.map(twett => {
        let datatwett = {};
        datatwett.profile_image_url = twett.user.profile_image_url;
        datatwett.screen_name = twett.user.screen_name;
        datatwett.name = twett.user.name;
        datatwett.text = twett.text;
        datatwett.created_at = twett.created_at;
        datatwett.retwett_count = twett.retweet_count;
        datatwett.favorite_count = twett.favorite_count;

        datasearch.push(datatwett);
    })
    console.log('THE SEARCH DATA', datasearch);
    return datasearch;
}


function respondSearch(req, res){
    const { input = ''} = req.query
    params.q = input;
    
   T.get('search/tweets', params, (err, data, response) => {
        data.statuses.map(twett => {
            let datatwett = {};
            datatwett.profile_image_url = twett.user.profile_image_url;
            datatwett.screen_name = twett.user.screen_name;
            datatwett.name = twett.user.name;
            datatwett.text = twett.text;
            datatwett.created_at = twett.created_at;
            datatwett.retwett_count = twett.retweet_count;
            datatwett.favorite_count = twett.favorite_count;

            datasearch.push(datatwett);
        })
        res.json(datasearch);
   });
   
}

function respondRandom(){

}

app.get('/search/*', respondSearch);
//app.get('/random', respondRandom);

app.listen(port, 
    () => console.log(`Server listening on port ${port}`));

