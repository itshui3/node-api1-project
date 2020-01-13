//react
import React, { useEffect } from 'react';
//axios
import axios from 'axios';
//redux
import { useDispatch, connect } from 'react-redux';
import constants from '../redux/constants'

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

  useEffect(() => {
    console.log(props.users);
  }, [props.users])
  return (
    <>
      <div className='usersList__cont'>
        {
          console.log(props.users)
        }
        {
          props.users && props.users.map((user, index) => (
            <div key={index} className='userCard__cont'>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
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