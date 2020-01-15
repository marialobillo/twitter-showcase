import React from 'react';
import Tweet from './Tweet';

const TweetList = ({twetts}) => (
    <div className="container row">
        <div className="tweet">
            {twetts.map(twett => (
                <div key={twett.id}>
                    <Tweet 
                        twett={twett}
                        key={twett.id}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default TweetList;