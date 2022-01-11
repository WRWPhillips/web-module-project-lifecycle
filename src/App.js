import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList'
import axios from 'axios';

class App extends React.Component {

  state = {
    user: [],
    followers: [],
    query: "tvolchko"
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.query}`)
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data
      });
    });
    axios.get(`https://api.github.com/users/${this.state.query}/followers`)
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      });
      console.log(this.state.followers);
    });
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      query: evt.target.value
    });
  }

  handleSearch = (evt) => {
    evt.preventDefault();
    const query = this.state.query;
    axios.get(`https://api.github.com/users/${query}/followers`)
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      });
      console.log(this.state.followers);
    });

    axios.get(`https://api.github.com/users/${query}`)
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data
      });
    });
  }

  render() {
    return(<div>
      <header>
        <h1>Github Info</h1>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search</button>
        </form>
      </header>
      <User 
      user={this.state.user}
      />
      <FollowerList 
      followers={this.state.followers}
      />
    </div>);
  }
}

export default App;
