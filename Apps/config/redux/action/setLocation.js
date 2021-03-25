import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyBzWnlMFdJAmZbbQEQKfHL0vnheiN2T1pc');

export const SET_PICKUP_SUCCESS = 'SET_PICKUP_SUCCESS';
export const SET_DESTINATION_SUCCESS = 'SET_DESTINATION_SUCCESS';

export const setLocation = payload => dispatch => {
  if (payload.pickup) {
    dispatch({
      type: SET_PICKUP_SUCCESS,
      payload: payload
    })
  } else {
    dispatch({
      type: SET_DESTINATION_SUCCESS,
      payload: payload,
    });
  }
};
