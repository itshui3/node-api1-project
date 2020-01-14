//react
import React, { useEffect } from 'react';
//axios
import axios from 'axios';
//redux
import { useDispatch, connect } from 'react-redux';
import constants from '../redux/constants';
//components
import UserCard from './UserCard';

const UsersList = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: constants.GETTING_USERS })
    axios.get('http://localhost:5000/api/users')
      .then( res => {
        console.log(res);
        dispatch({ type: constants.GET_USERS, payload: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className='usersList__cont'>
        {
          props.users && props.users.map((user, index) => (
            <UserCard user={user} index={index} key={index} />
          ))
        }
      </div>
    </>
  )
}

const mapStateToProps = ({ usersReducer }) => {
  return {
    users: usersReducer.usersList
  }
}

export default connect(mapStateToProps)(UsersList);