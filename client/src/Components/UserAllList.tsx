import { useMutation, useQuery } from '@apollo/client';
import { DELETE_USER } from '../Graphql/Mutations';
import { GET_ALL_USERS } from '../Graphql/Queries';

const UserAllList = () => {

    // make a query for get all users
    const { data } = useQuery(GET_ALL_USERS);
    // console.log(data)

    // delete mutation
    const [deleteUser, { error }] = useMutation(DELETE_USER);

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
                        data?.getAllUsers?.map((user: any, index: any) => {
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