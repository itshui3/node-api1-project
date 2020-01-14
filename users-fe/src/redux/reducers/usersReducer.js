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
      const newListD = state.usersList.slice(0, payload)
                               .concat(state.usersList
                               .slice(payload + 1))

      return {
        ...state,
        usersList: newListD,
        isDeletingUser: false
      }
    // edit user
    case constants.EDITING_USER:
      return {
        ...state, 
        isEditingUser: true
      }
    case constants.EDIT_USER:
      // payload will be the user
      // user will have an id for comparison
      console.log(payload);
      const index = state.usersList.findIndex(e => {
        console.log(payload.id, 'payload id');
        console.log(e.id, 'e id')
        return e.id === payload.id;
      })
      console.log(index, 'index');
      const newListE = state.usersList.slice(0, index)
                                     .concat(payload)
                                     .concat(state.usersList.slice(index + 1));
      return {
        ...state,
        usersList: newListE,
        isEditingUser: false
      }

    default:
      return state;
  }
}