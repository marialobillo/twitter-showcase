import React, { Component } from 'react';


class SearchTweets extends Component {
    contructor(){
        this.state = {
            selectedTweets: []
        }
    }

    componentDidMount(){

    }

    getRequest = async (query) => {
        const url = '';

        const request = await fetch(url);
        const tweets = await request.json();
        
        this.setState({
            selectedTweets: tweets
        })
    }
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Hello from Searching Tweets</h1>
                <div className="">
                    <input
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                </div>
            </div>

        );
    }
}

export default SearchTweets;