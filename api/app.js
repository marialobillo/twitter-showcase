const Twit = require('twit');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

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


/*
function gotData(err, data, response) {
    const datasearch = [];
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

    return datasearch;
}
*/

function respondSearch(req, res){
    const datasearch = [];
    const { input = ''} = req.query
    params.q = input;
    params.count = 10;
    
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

function respondUserTwetts(req, res){
    const { input = ''} = req.query;
    var options = { screen_name: input,
                count: 20 };
    const datasearch = [];
    T.get('statuses/user_timeline', options , (err, data) => {
        data.map(twett => {
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
        let randomNumber = Math.floor(Math.random() * 20);
        res.json(datasearch[randomNumber]);
      })
}

/*
FOR SEARCH: localhost:9000/search/?input=input
FOR USERS: localhost:9000/uses/?input=screen_name
brendaneich
_ericelliot
LeaVerou
dan_abramov
kentcdodds
*/
app.use(cors());

app.get('/search/*', respondSearch);
app.get('/users/*', respondUserTwetts);

app.listen(port, 
    () => console.log(`Server listening on port ${port}`));

