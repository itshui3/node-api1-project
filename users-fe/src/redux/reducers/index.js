import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';

export const reducer = combineReducers({ usersReducer: usersReducer });