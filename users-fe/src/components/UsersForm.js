//react
import React, { useState, useEffect } from 'react';
//axios
import axios from 'axios';
//redux
import constants from '../redux/constants';
import { useDispatch } from 'react-redux';


const UsersForm = props => {
  // edit form: props.user, props.index
  const thisUser = {
    name: '',
    bio: ''
  }
  if (props.user) {
    thisUser.name = props.user.name;
    thisUser.bio = props.user.bio;
  } 
  const [user, setUser] = useState(thisUser);
  const dispatch = useDispatch();

  const handleInput = ev => {
    setUser({
      ...user,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    if (props.user) {
      dispatch({ type: constants.EDITING_USER });

      const id = props.user.id;

      const updatedUser = {
        ...props.user,
        ...user
      }

      axios.put(`http://localhost:5000/api/users/${id}`, user)
        .then( res => {
          console.log(res);
          dispatch({ type: constants.EDIT_USER, payload: updatedUser })
        })
        .catch( err => {
          console.log(err);
        })
    } else {
      dispatch({ type: constants.ADDING_USER });
      axios.post('http://localhost:5000/api/users', user)
        .then( res => {
          console.log(res);
          dispatch({ type: constants.ADD_USER, payload: user });
        })
        .catch( err => {
          console.log(err);
        })
  
      setUser({
        name: '',
        bio: ''
      })

    }

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

          {
            props.user ?
              (<button type='submit'>Edit User</button>)
              :
              (<button type='submit'>Add New User</button>)
          }
        </form>
      </div>
    </>
  )
}

export default UsersForm;