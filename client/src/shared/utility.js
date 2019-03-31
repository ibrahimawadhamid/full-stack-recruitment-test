import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/search'
});

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
