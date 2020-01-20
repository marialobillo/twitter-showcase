import React, {Component} from 'react';
import TweetList from './TweetList';


class SearchTweets extends Component {
    constructor(){
        super();
        this.state = {
          searchResult: []
        }
    }

    getRequest = async (input) => {
        const url = `http://localhost:9000/search/?input=${input}`;

        const request = await fetch(url);
        const data = await request.json();
        const result = [];
        data.map(item => { result.push(item)});
        
        this.setState({
           searchResult: result
        })
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const query = this.state.query;

        this.getRequest(query);
    }
    
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Search Twetts about any Topic</h1>
                <div className="">
                    <form onSubmit={this.handleSubmit}>
                    <input
                        name="query"
                        className="form-control form-control-lg" 
                        onChange={this.handleChange}/>
                    </form>
                </div>
                <div className="">
                   <TweetList twetts={this.state.searchResult} />
                    
                </div>
            </div>
    
        );    
    }
    
}

export default SearchTweets;