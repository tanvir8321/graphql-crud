import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { useState } from 'react';
import './App.css';
import UserAllList from './Components/UserAllList';
import UserCreate from './Components/UserCreate';

function App() {

  // user state
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    password: "",
  });

  // user state update by onchange
  const userChangeHandler = (event: { target: { name: any; value: any; }; }) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
  }

  // user state print
  // console.log(newUser);

  // client creation to connect the backend
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">
          <h1 className="text-center my-4">GraphQL &mdash; CRUD</h1>
          <h6 className="text-center"> Technology used: 
            <span className="badge bg-primary m-1">React Js</span>
            <span className="badge bg-danger m-1">Sequelize ORM</span>
            <span className="badge bg-primary m-1">Typescript</span>
            <span className="badge bg-danger m-1">Redux</span>
            <span className="badge bg-danger m-1">GraphQL</span>
            <span className="badge bg-primary m-1">Node Js</span>
            <span className="badge bg-primary m-1">Redux Toolkit</span>
            <span className="badge bg-primary m-1">Exoress Js</span>
            <span className="badge bg-primary m-1">Nodemon</span>
            <span className="badge bg-danger m-1">Apollo Client</span>
            <span className="badge bg-primary m-1"></span>
            <span className="badge bg-primary m-1"></span>
          </h6>
          <div className="row mt-4">
            <UserAllList /> {/* display all users */}
            <UserCreate /> {/* user creation comnent */}
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
