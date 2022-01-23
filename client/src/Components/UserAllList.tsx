import { useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER } from '../Graphql/Mutations';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { getAllUsersAction } from '../Redux/actions/userActions';

const UserAllList = () => {

    // redux
    const dispatch = useDispatch();
    const userLists = useSelector((state:any) => state?.getAllUsers?.users); // data retrived from redux store by useSelector()

    // make a query for get all users
    const  getAllUsers = useQuery(GET_ALL_USERS); // data retrived from sql server by graphql
    dispatch(getAllUsersAction(getAllUsers?.data?.getAllUsers)); // data store in the redux store by useDispatch()
    // console.log(data)

    // useEffect(()=>{

    // },[data?.getAllUsers?.length])

    // delete mutation
    const [deleteUser, { error, data, loading } ] = useMutation(DELETE_USER);
    // console.log(data, loading, error);

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
                        userLists?.map((user: any, index: any) => {
                            const { id, name, username, password } = user;
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{username}</td>
                                    <td>{password}</td>
                                    <td><button onClick={() => {
                                        deleteUser({ variables: { id: user.id } });
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