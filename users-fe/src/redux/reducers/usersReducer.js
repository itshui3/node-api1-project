import constants from '../constants';

const initialState = {
  usersList: [],
  isAddingUser: false,
  isGettingUsers: false,
  isDeletingUser: false
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
    // delete user
    case constants.DELETING_USER:
      return {
        ...state,
        isDeletingUser: true
      }
    case constants.DELETE_USER:
      // payload is the index of user on client
      const newList = state.usersList.slice(0, payload)
                               .concat(state.usersList
                               .slice(payload + 1))

      return {
        ...state,
        usersList: newList,
        isDeletingUser: false
      }

    default:
      return state;
  }
}