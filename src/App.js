import React from "react";
import Header from './components/header.js';
import Body from './components/body.js';
import Filters from './components/filters.js'
import API from './utils/API.js';

class App extends React.Component {
  state = {
    users: [],
    search: "",
    cache: []   // This will store the original list
  }

  componentDidMount() {
      this.searchUsers(50);
  }

  searchUsers = query => {
    API.getUsers(query)
      .then(res => this.setState({
        users: res.data.results,
        cache: res.data.results
      }))
      .catch(err => console.log(err));  
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    const list = this.state.users;
    const search = this.state.search;
    const searchList = list.filter( employee => employee.name.first === search) 
      this.setState({
          users: searchList
        });
  };

  handleClear = event => {
    event.preventDefault();

    this.setState({
      users: this.state.cache
    })
  };

  handleAlphaSort = event => {
    event.preventDefault();

    const sortedUsers = this.state.users.sort((a,b) => {
      if(a.name.first < b.name.first)
        return -1;
      if(a.name.first > b.name.first)
        return 1;

      return 0;
    });

    console.log(sortedUsers);

    this.setState({users: sortedUsers});
  };

  handleStartSort = event => {
    event.preventDefault();

    const sortedUsers = this.state.users.sort((a,b) => {
      return new Date(a.registered.date).getTime() - new Date(b.registered.date).getTime();
    });

    this.setState({users: sortedUsers});
  }

  render() {
    return(
      <div className="container">
        <Header />
        <Filters 
          handleInputChange={this.handleInputChange} 
          value={this.state.search} 
          handleFormSubmit={this.handleFormSubmit}
          handleClear={this.handleClear}  
          handleAlphaSort={this.handleAlphaSort}
          handleStartSort={this.handleStartSort}      
        />
        <Body users={this.state.users}/>
      </div>
    )
  };
}

export default App;
