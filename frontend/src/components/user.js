import React, { Component } from 'react';
import axios from 'axios'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';


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
          <div>
            {
              this.state.users.map(users => {
                return(
                  <ListItem button>
                    <ListItemIcon>
                    <PeopleAltIcon />

                    </ListItemIcon>
                    <ListItemText primary={users.firstName+' '+users.lastName}/>
                  </ListItem>
                )
              })
            } 
          </div>
        )
      }
}

export default user;