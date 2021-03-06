import * as actionTypes from './actionTypes';
import {axiosInstance} from '../../shared/utility';
import moment from 'moment';

export const setResults = (searchResults) => {
  return {
    type: actionTypes.SET_RESULTS,
    searchResults: searchResults
  };
};


export const fetchResultsFailed = (errorMessage) => {
  return {
    type: actionTypes.FETCH_RESULTS_FAILED,
    errorMessage: errorMessage
  };
};

export const fetchResults = () => {
  const nextMonday = moment().startOf('isoWeek').add(1, 'week').format("YYYY-MM-DD");
  const followingDay = moment().startOf('isoWeek').add(1, 'week').add(1, 'days').format("YYYY-MM-DD");
  const backendURL = "http://localhost:4000/api/search";
  const params = {
    Currency: "GBP",
    Locale: "en-GB",
    Adults: 1,
    Children: 0,
    Infants: 0,
    OriginPlace: "EDI",
    DestinationPlace: "LHR",
    OutboundDate: nextMonday,
    InboundDate: followingDay,
    LocationSchema: "sky",
    CabinClass: "economy",
    GroupPricing: false,
  };
  return dispatch => {
    axiosInstance.get(backendURL, {params})
      .then(response => {
        dispatch(setResults(response.data));
      })
      .catch(errorMessage => {
        dispatch(fetchResultsFailed(errorMessage));
      });
  };
};
