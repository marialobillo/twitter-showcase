const Twit = require('twit');
require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 9000;
const cors = require('cors');


const app = express();


let T = new Twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


let params = { 
    q: 'banana', 
    count: 2, 
    lang: 'eu'
};

function handleDate(date){
    return date.split('+')[0];
   
}

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
            datatwett.created_at = handleDate(twett.created_at);
            datatwett.retwett_count = twett.retweet_count;
            datatwett.favorite_count = twett.favorite_count;
            datatwett.id = twett.id;

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
            datatwett.created_at = handleDate(twett.created_at);
            datatwett.retwett_count = twett.retweet_count;
            datatwett.favorite_count = twett.favorite_count;
            datatwett.id = twett.id;
            
            datasearch.push(datatwett);
        })
        let randomNumber = Math.floor(Math.random() * 20);
        res.json(datasearch[randomNumber]);
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
if(process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, 'client/build')));  
    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/build/index.html'));  
    }
)}

//build mode
app.get('*', (req, res) => {  
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

//start server
app.listen(port, (req, res) => {  
    console.log( `Server listening on port: ${port}`);
});


