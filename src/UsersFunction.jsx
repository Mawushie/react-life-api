import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function UsersFunction() {
    let myusers = [];
    const [users, setUsers] = useState(myusers);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            // console.log(res)
            setUsers(res.data)
        })
        .catch(err =>{
            console.log(err)
        }, [])
    })
    return (
        <div>
               <h1>Users Function</h1> 
               <hr></hr>
               <div>
                   {users.map(users => <div>
                       <p>{users.name}</p>
                       <p>{users.email}</p>
                       <hr></hr>
                       </div>)}
               </div>
        </div>
    )
}

