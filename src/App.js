import React from "react";
import Header from './components/header.js';
import Body from './components/body.js';
import Filters from './components/filters.js'
import API from './utils/API.js';

class App extends React.Component {
  state = {
    users: [],
    search: "",
  }

  componentDidMount() {
    this.searchUsers(5);
    
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  searchUsers = query => {
    API.getUsers(query)
      .then(res => this.setState({users: res.data.results}))
      .catch(err => console.log(err));
    
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Filters handleInputChange={this.handleInputChange}/>
        <Body users={this.state.users} search={this.state.search}/>
      </div>
    )
  };
}

export default App;
