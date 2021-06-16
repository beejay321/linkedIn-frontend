import logo from "./logo.svg"
import "./App.css"
import React from "react"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import MyNav from "./components/MyNav"
import Footer from "./components/Footer"
import Feeds from "./components/Feeds"
import SearchResults from "./components/SearchResults"

class App extends React.Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  render() {
    return (
      <Router>
        <MyNav query={this.state.query} handleChange={this.handleChange} />

        <Route component={Feeds} path="/" exact />
        <Route path="/search/:query" component={SearchResults} />
        <Route component={Home} path="/user/:id" />
        <Footer />
      </Router>
    )
  }
}

export default App
