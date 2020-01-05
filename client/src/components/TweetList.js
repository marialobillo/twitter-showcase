import React from 'react';
import Tweet from './Tweet';

const TweetList = ({tweets}) => (
    <div className="row">
        <div className="tweet">
            {tweets.map(tweet => (
                <Tweet 
                    key={tweet.id}
                    tweet={tweet}
                />
            ))}
        </div>
    </div>
);

export default TweetList;