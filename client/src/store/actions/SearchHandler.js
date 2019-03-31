import * as actionTypes from './actionTypes';
import {axiosInstance} from '../../shared/utility';
import moment from 'moment';


export const setResults = (searchResults) => {
  console.log(searchResults);
  return {
    type: actionTypes.SET_RESULTS,
    searchResults: searchResults
  };
};


export const fetchResultsFailed = () => {
  return {
    type: actionTypes.FETCH_RESULTS_FAILED
  };
};

export const fetchResults = () => {
  console.log('fetching results from server...');
  const nextMonday = moment().startOf('isoWeek').add(1, 'week').format("YYYY-MM-DD");
  const followingDay = moment().startOf('isoWeek').add(1, 'week').add(1, 'days').format("YYYY-MM-DD");
  const backendURL = "http://localhost:4000/api/search"
  const params = {
    Country: "GB",
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
    pageIndex: 1,
    pageSize: 1
  };
  return dispatch => {
    axiosInstance.get(backendURL, {params})
      .then(response => {
        dispatch(setResults(response.data));
      })
      .catch(error => {
        dispatch(fetchResultsFailed());
      });
  };
};
