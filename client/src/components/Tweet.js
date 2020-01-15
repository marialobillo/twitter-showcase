import React from 'react';

const Tweet = ({twett}) => (
    <div className="twett row">
        <div className="avatar">
            <img 
                src={twett.profile_image_url}
                alt={twett.screen_name} 
                className="avatar-image" />
        </div>
        <div className="twett-content">
            <div className="twett-author">@{twett.screen_name}</div>
            <div className="twett-name"><span> </span>{twett.name}</div>
            <div className="twett-date">{twett.created_at}</div>
        </div>
        <div className="twett-text">{twett.text}</div>
        <div className="twett-social">
            <div className="flex-item">
                {twett.retwett_count}
                <i className="ico-retwett"></i>
            </div>
            <div className="flex-item">
                {twett.favorite_count}
                <i className="ico-favorite"></i>
            </div>
        </div>

    </div>
);

export default Tweet;