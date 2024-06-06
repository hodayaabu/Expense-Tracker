import { userService } from "../../services/user.service"

export const SET_USER = 'SET_USER'
export const ADD_USER = 'ADD_USER'

const initialState = {
  user: userService.getLoggedinUser() || null,
  users: []
}


export function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };
    default:
      return state
  }
}