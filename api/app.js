const Twit = require('twit')

let T = new Twit({
    consumer_key: 'ljFxeJBqmaKhyLcGjNVeOZNZU',
    consumer_secret: 'CojBFeX6Tge8kVTwcF1B6CtxuJHIyca2A3cgwX6FSjKheaMcpW',
    access_token: '60619926-1UwW0bEGpMzJnFxctsXhCKaB48YMPdvLC70Im2cm2',
    access_token_secret: '9kQmJjxmiwAmfvIx0EDc8yHJFniMP6fptfyM8x3Tmt6rS'
});



let params = { 
    q: 'banana', 
    count: 10, 
    lang: 'eu'
};

function gotData(err, data, response) {
    data.statuses.forEach(twett => {
        console.log("---> ", twett.text);
    })
}


T.get('search/tweets', params, gotData);

