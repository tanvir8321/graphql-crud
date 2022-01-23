import { useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { DELETE_USER } from '../Graphql/Mutations';
import { GET_ALL_USERS } from '../Graphql/Queries';

const UserAllList = () => {


    // make a query for get all users
    const  getAllUsers = useQuery(GET_ALL_USERS);
    // console.log(data)

    // useEffect(()=>{

    // },[data?.getAllUsers?.length])

    // delete mutation
    const [deleteUser, { error, data, loading } ] = useMutation(DELETE_USER);
    console.log(data, loading, error);

    return (
        <div className="col-12 col-md-8 mt-5 mt-md-0">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Password</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getAllUsers?.data?.getAllUsers?.map((user: any, index: any) => {
                            const { id, name, username, password } = user;
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{password}</td>
                                    <td><button onClick={() => {
                                        deleteUser({ variables: { id: user.id } });
                                        getAllUsers?.refetch();
                                    }} className="btn btn-danger">Delete</button></td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default UserAllList;