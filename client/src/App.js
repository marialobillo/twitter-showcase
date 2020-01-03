import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SearchTweets from './components/SearchTweets';
import RandomTweets from './components/RandomTweets';


function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <main className="container mt-5">
        <Switch>
          <Route exact path="/home" 
            component={Home}/> 
          <Route exact path="/search"
            component={SearchTweets} />
          <Route exact path="/random"
            component={RandomTweets} />
        </Switch>
        </main>

        <footer className="text-center">All Rights Reserved.</footer>
      </Router> 
    </div>
  );
}

export default App;
