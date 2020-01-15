import React, {Component} from 'react';
import TweetList from './TweetList';


class SearchTweets extends Component {
    constructor(){
        super();
        this.state = {
          searchResult: []
        }
    }
    componentDidMount(){
        this.callAPI();
    }

    callAPI = async (input = 'banana') => {
        const url = `http://localhost:9000/search/?input=${input}`;

        const request = await fetch(url);
        const data = await request.json();
        const result = [];
        data.map(item => { result.push(item)});
        
        this.setState({
           searchResult: result
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
                <div className="">
                   <TweetList twetts={this.state.searchResult} />
                    
                </div>
            </div>
    
        );    
    }
    
}

export default SearchTweets;