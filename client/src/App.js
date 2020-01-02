import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import SearchTweets from './components/SearchTweets';
import RandomTweets from './components/RandomTweets';


function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/home" 
            component={Home}/> 
          <Router exact path="/search"
            component={SearchTweets} />
          <Router exact path="/random"
            component={RandomTweets} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
