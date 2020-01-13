//react
import React from 'react';
//imports
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <UsersForm />
      <UsersList />
    </div>
  );
}

export default App;
