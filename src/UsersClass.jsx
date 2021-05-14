import React, { Component } from 'react'

export default class UsersClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            console.log("users:", users);
            this.setState({
                users : users
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
               <h1>Users</h1> 
               <hr></hr>
               <div>
                   {this.state.users.map(users => <div>
                       <p><b>Name: </b> {users.name}</p>
                       <p><b>Username: </b>{users.username}</p>
                       <p><b>Email: </b>{users.email}</p>
                       <hr></hr>
                       </div>)}
               </div>
            </div>
        )
    }
}
