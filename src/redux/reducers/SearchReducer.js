import { SET_SEARCH } from "../actions/SearchActions";

function searchReducer(state = [], action) {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;

    default:
      return state;
  }
}

export default searchReducer;
