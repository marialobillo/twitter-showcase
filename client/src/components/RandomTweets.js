import React, {Component} from 'react';
import Tweet from './Tweet';


class RandomTweets extends Component {
    constructor(){
        super();

        this.state = {
         twett: [],
         users: [
             {name: 'Brendan Eich', username: 'brendaneich'},
             {name: 'Lea Verou', username: 'LeaVerou'},
             {name: 'Dan Abramov', username: 'dan_abramov'},
             {name: 'Kent C Dodds', username: 'kentcdodds'},
             {name: 'Natalie Mac', username: 'nataliemac'}
         ],
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
        const userCards = this.state.users.map(user => {
            return (
                <div className="col-md-2">
                       <span className="">{user.name}</span>
                       <button 
                        className="btn btn-info"
                        onClick={() => this.handleClick({user.username})}>
                           Show Twetts
                        </button>
                    </div>
            );
        })
        return (
            <div className="container">
                <h1 className="text-center">Get a random twett from:</h1>
                <div className="row">
                  
                
                    {usersCards}

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