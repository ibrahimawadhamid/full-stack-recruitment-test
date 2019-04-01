import axios from 'axios';

export const axiosInstance = axios.create();

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};
