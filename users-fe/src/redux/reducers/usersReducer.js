import constants from '../constants';

const initialState = {
  usersList: [],
  isAddingUser: false,
  isGettingUsers: false
}

export const usersReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    // add user
    case constants.ADDING_USER:
      return {
        ...state,
        isAddingUser: true
      }
    case constants.ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, payload],
        isAddingUser: false
      }
    // get users
    case constants.GETTING_USERS:
      return {
        ...state,
        isGettingUsers: true
      }
    case constants.GET_USERS:
      return {
        ...state,
        usersList: payload,
        isGettingUsers: false
      }

    default:
      return state;
  }
}