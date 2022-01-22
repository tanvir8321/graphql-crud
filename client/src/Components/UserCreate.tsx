import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_USER } from '../Graphql/Mutations';
import UpdatePassword from './UpdatePassword';

const UserCreate = () => {
    // initial new user state
    const initNewUser = {
        name: "",
        username: "",
        password: "",
    }

    // user state
    const [newUser, setNewUser] = useState(initNewUser);

    // create mutation
    const [createUser, { error }] = useMutation(CREATE_USER);

    // user state update by onchange
    const userChangeHandler = (event: { target: { name: any; value: any; }; }) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }

    // user store into 'users' table after click 'Create User' button
    const userCreateHandler = () => {
        createUser({
            variables: {
                name: newUser?.name,
                username: newUser?.username,
                password: newUser?.password,
            },
        })
        setNewUser(initNewUser);
    }
    return (
        <div className="col-12 col-md-4">
            <div className="border p-2 rounded">
                <h4 className="text-center">User Registration</h4>
                <input value={newUser?.name} name="name" onChange={userChangeHandler} type="text" placeholder="Name..." className="form-control mb-3" />
                <input value={newUser?.username} name="username" onChange={userChangeHandler} type="text" placeholder="Username..." className="form-control mb-3" />
                <input value={newUser?.password} name="password" onChange={userChangeHandler} type="text" placeholder="Password..." className="form-control mb-3" />
                <div className="text-end">
                    <button onClick={userCreateHandler} className="btn btn-primary">Create User</button>
                </div>
            </div>
            <UpdatePassword />
        </div>
    );
};

export default UserCreate;