import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutations';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {
    // initial password state
    const initPassword = {
        userName: "",
        oldPassword: "",
        newPassword: ""
    }

    // make a query for get all users
    const { refetch } = useQuery(GET_ALL_USERS);
    // console.log(refetch)

    // password state
    const [password, setPassword] = useState(initPassword);

    // password state update
    const passwordChangeHandler = (event: any) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        })
    }

    // password mutation
    const [updatePassword, { error, data, loading }] = useMutation(UPDATE_PASSWORD);
    // console.log(data, error, loading)

    // new password info
    // console.log(password);

    // update by onclick function
    const updatePasswordHandler = () => {
        updatePassword({
            variables: {
                username: password.userName,
                oldPassword: password.oldPassword,
                newPassword: password.newPassword,
            },
        });
        setPassword(initPassword);
    }


    return (
        <div className="border rounded p-2 mt-4">
            {
                data?.updatePassword?.success && toast("Password Updated...")
                
            }
            <h4 className="text-center">User Password Update</h4>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Username..."
                name="userName"
                onChange={passwordChangeHandler}
                value={password.userName}
            // onChange={(event) => {
            //     setUsername(event.target.value);
            // }}
            />
            <input
                className="form-control mb-3"
                type="password"
                placeholder="Current Password..."
                name="oldPassword"
                onChange={passwordChangeHandler}
                value={password.oldPassword}
            // onChange={(event) => {
            //     setCurrentPassword(event.target.value);
            // }}
            />
            <input
                className="form-control mb-3"
                type="password"
                placeholder="New Password..."
                name="newPassword"
                onChange={passwordChangeHandler}
                value={password.newPassword}
            // onChange={(event) => {
            //     setNewPassword(event.target.value);
            // }}
            />

            {/* toastify component */}
            <ToastContainer />

            <div className="text-end">
                <button className="btn btn-warning" onClick={() => { updatePasswordHandler(); refetch(); }} >Update Password</button>
            </div>
        </div>
    );
};

export default UpdatePassword;