import { CLEAR_USER, SET_USER } from "../actions";

const initialUserState = { username: "", id: null, role: "" };

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, username: action.username };
    case CLEAR_USER:
      return { ...state, username: "" };
    default:
      return state;
  }
}
export default userReducer;
