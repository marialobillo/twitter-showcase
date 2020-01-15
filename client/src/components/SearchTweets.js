import React, {Component} from 'react';


class SearchTweets extends Component {
    constructor(){
        super();
        this.state = {
          searchResult: ''
        }
    }
    componentDidMount(){
        this.callAPI();
    }

    callAPI = async (input = 'banana') => {
        const url = `http://localhost:9000/search/?input=${input}`;

        const request = await fetch(url);
        const data = await request.json();
        console.log(data);
        
        /*
        fetch(url)
            .then(res => res.text())
            .then(res => {
            //console.log(res);
            const results = res.json();
            this.setState({ searchResult: results})
            })
            .catch(err => console.log('Error the calling API', err));
        */
    }
    
    render(){
        const list = this.state.searchResult;
        return (
            <div className="container">
                <h1 className="text-center">Hello from Searching Tweets</h1>
                <div className="">
                    <input
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                </div>
                <div className="">
                    {list}
                    
                </div>
            </div>
    
        );    
    }
    
}

export default SearchTweets;