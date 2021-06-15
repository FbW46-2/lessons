import React, { Component } from 'react';
import Header from './components/Header';
import Me from './views/Me';
import Hobbies from './views/Hobbies';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/" component={Me} />
              <Route exact path="/me" component={Me} />
              <Route exact path="/hobbies" component={Hobbies} />  
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
