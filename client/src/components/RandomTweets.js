import React from 'react';
import TweetList from './TweetList';

function RandonTweets({tweetRandomList}){
    return (
        <div className="container">
            <h1 className="text-center">Hello from RandomTweets</h1>
            <TweetList tweet={tweetRandomList} />
        </div>

    );
}

export default RandonTweets;