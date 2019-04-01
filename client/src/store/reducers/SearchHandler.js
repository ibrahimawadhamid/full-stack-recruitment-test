import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
  searchResults: null,
  errorMessage: null,
};


const setResults = (state, action) => {
  const searchResults = action.searchResults;
  const updatedState = {
    searchResults: searchResults,
  };
  return updateObject(state, updatedState);
};


const fetchResultsFailed = (state, action) => {
  const errorMessage = action.errorMessage.message;
  const updatedState = {
    errorMessage: errorMessage,
  };
  return updateObject(state, updatedState);
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RESULTS:
      return setResults(state, action);
    case actionTypes.FETCH_RESULTS_FAILED:
      return fetchResultsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
