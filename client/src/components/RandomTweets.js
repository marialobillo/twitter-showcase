import React, {Component} from 'react';
import Tweet from './Tweet';


class RandomTweets extends Component {
    constructor(){
        super();

        this.state = {
         twett: [],
         username: '',
         isPrepared: false
        }
    } 

    handleClick = (input) => {
        this.getRequest(input);
    }

    async getRequest(input){
        const url = `http://localhost:9000/users/?input=${input}`;

        const request = await fetch(url);
        const data = await request.json();
        
        this.setState({
           twett: data,
           isPrepared: true
        })
    }


    render(){
        return (
            <div className="container">
                <h1 className="text-center">Get a random twett from:</h1>
                <div className="row">
                   <div className="col-md-2">
                       <span className="">Brendan Eich</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick('brendaneich')}>
                           Show Twetts
                        </button>
                    </div>
                    <div className="col-md-2">
                       <span className="">Lea Verou</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick('LeaVerou')}>
                           Show Twetts
                        </button>
                    </div>
                    <div className="col-md-2">
                    <span className="">Dan Abramov</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick('dan_abramov')}>
                           Show Twetts
                        </button>
                    </div>
                    <div className="col-md-2">
                    <span className="">Kent C Dodds.</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick('kentcdodds')}>
                           Show Twetts
                        </button>
                    </div>
                    <div className="col-md-2">
                    <span className="">Natalie MacLees</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick('nataliemac')}>
                           Show Twetts
                        </button>
                    </div>

                </div>
                <div className="">
                    {this.state.isPrepared ?  <Tweet 
                        twett={this.state.twett}
                    /> : '' }
                   
                   
                </div>
            </div>
    
        );    
    }
    
}

export default RandomTweets;