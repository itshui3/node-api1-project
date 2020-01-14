import React from 'react';
import axios from 'axios';
import constants from '../redux/constants';
import { useDispatch, connect } from 'react-redux';

import UsersForm from './UsersForm';

const UserCard = props => {
  // props.name, props.bio, props.index
  const dispatch = useDispatch();
  const handleDelete = ev => {
    axios.delete(`http://localhost:5000/api/users/${props.user.id}`)
      .then( res => {
        console.log(res);
        dispatch({ type: constants.DELETE_USER, payload: props.index })
      })
      .catch( err => {
        console.log(err);
      })
  }

  console.log(props.user);

  return (
    <>
      <div className='userCard__cont'>
        <h2>{props.user.name}</h2>
        <p>{props.user.bio}</p>
        <button name={props.index} onClick={handleDelete}>Delete User</button>
      </div>

      {/* modal */}
      <div className='modal__outer'>
        <div className='modal__inner'>
          <UsersForm user={props.user} index={props.index} />
        </div>
      </div>
    </>
  )
}



export default UserCard;