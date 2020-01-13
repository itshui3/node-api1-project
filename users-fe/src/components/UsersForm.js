//react
import React, { useState } from 'react';
//axios
import axios from 'axios';
//redux
import constants from '../redux/constants';
import { useDispatch } from 'react-redux';


const UsersForm = props => {
  const [user, setUser] = useState({
    name: '',
    bio: ''
  })
  const dispatch = useDispatch();

  const handleInput = ev => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch({ type: constants.ADDING_USER });

    axios.post('http://localhost:5000/api/users', user)
      .then( res => {
        console.log(res);
        dispatch({ type: constants.ADD_USER, payload: user });
      })
      .catch( err => {
        console.log(err);
      })
  }
  return (
    <>
      <div className='usersForm__cont'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='name'
            name='name'
            value={user.name}
            onChange={handleInput}
          />
          <input
            placeholder='bio'
            name='bio'
            value={user.bio}
            onChange={handleInput}
          />
          <button type='submit'>Add New User</button>
        </form>
      </div>
    </>
  )
}

export default UsersForm;