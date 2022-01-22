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
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container">
          <h1 className="text-center my-4">GraphQL &mdash; CRUD</h1>
          <div className="row">
            <UserAllList /> {/* display all users */}
            <UserCreate /> {/* user creation comnent */}
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
