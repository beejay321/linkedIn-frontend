import './App.css';
import React from 'react';
import Home from './Components/Home.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyNav from './Components/MyNav.jsx';
import Footer from './Components/Footer.jsx';
import Feeds from './Components/Feeds.jsx';
import SearchResults from './Components/SearchResults.jsx';
import nothingHere from './Components/nothingHere.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
class App extends React.Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <Router>
        <MyNav query={this.state.query} handleChange={this.handleChange} />

        <Route component={Feeds} path="/" exact />
        <Route component={nothingHere} path="/workInProgress" />
        <Route path="/search/:query" component={SearchResults} />
        <Route component={Home} path="/user/:id" />
        <Footer />
      </Router>
    );
  }
}

export default App;
