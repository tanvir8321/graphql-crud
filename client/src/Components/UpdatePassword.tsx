import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutations';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {
    // initial password state
    const initPassword = {
        userName: "",
        oldPassword: "",
        newPassword: ""
    }

    // password state
    const [password, setPassword] = useState(initPassword);

    // password state update
    const passwordChangeHandler = (event: { target: { name: any; value: any; }; }) => {
        setPassword({
            ...password,
            [event.target.name]: event.target.value
        })
    }

    // password mutation
    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    // new password info
    // console.log(password);
    
    return (
        <div className="border rounded p-2 mt-4">
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

            <div className="text-end">
                <button
                    className="btn btn-warning"
                onClick={() => {
                    setPassword(initPassword);
                    updatePassword({
                        variables: {
                            username: password.userName,
                            oldPassword: password.oldPassword,
                            newPassword: password.newPassword,
                        },
                    });
                }}
                >
                    UPDATE PASSWORD
                </button>
            </div>
        </div>
    );
};

export default UpdatePassword;