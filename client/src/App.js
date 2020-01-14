import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SearchTweets from './components/SearchTweets';
import RandomTweets from './components/RandomTweets';


class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  componentDidMount(){
    //this.getRequest();
    this.callAPI();
  }

  callAPI(input = 'hola'){
    fetch(`http://localhost:9000/search/?input=${input}`)
      .then(res => res.text())
      .then(res => this.setState({ }))
      .catch(err => console.log('Error the calling API', err));
  }

  getRequest = async (input = 'hola') => {
    console.log('Hola');
    const url = `http://localhost:9000/search/?input=${input}`;

    const request = await fetch(url);
    const twetts = await request.json();

    console.log(twetts);
    console.log('Adios');
  }

  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <main className="container mt-5">
            <Switch>
              <Route exact path="/home"
                component={Home} />
              <Route exact path="/search"
                component={SearchTweets} />
              <Route exact path="/random"
                component={RandomTweets} />
            </Switch>
          </main>

          <footer className="text-center">Twtter Showcase App.</footer>
        </Router>
      </div>
    );

  }
}

export default App;
