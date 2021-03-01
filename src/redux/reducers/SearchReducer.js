import { SET_SEARCH } from "../actions";

function searchReducer(state = [], action) {
  switch (action.type) {
    case SET_SEARCH:
      console.log(action, state);
      return action.search;

    default:
      return state;
  }
}

export default searchReducer;
