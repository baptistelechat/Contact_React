import React, { Component } from 'react';
import axios from 'axios'

class user extends Component {
    state = {
        users: []
      }
    
      componentDidMount() {
        axios.get('http://localhost:8000/api/v1/users')
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
      }
    
      render() {
        return (
          <ul>
            { this.state.users.map(users => <li>{users.firstName} {users.lastName}</li>)}
          </ul>
        )
      }
}

export default user;