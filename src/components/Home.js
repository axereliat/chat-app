import React, {useEffect, useState} from 'react';
import {Requester} from "../api/requester";
import toastr from 'toastr';
import {ListGroup, ListGroupItem} from "reactstrap";
import {Auth} from "../api/auth";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Requester.fetchUsers()
            .then(res => {
                setUsers(res.data.filter(u => u.id.toString() !== Auth.getUserId().toString()));
            })
            .catch(err => {
                console.log(err);
                toastr.error(err.response.data.message);
            });
    }, []);

    return (
        <div className="jumbotron">
            <ListGroup>
                {users.map(user => (
                    <ListGroupItem key={user.id}>
                        {user.username}
                        <button className="btn btn-primary float-right">Chat</button>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default Home;
