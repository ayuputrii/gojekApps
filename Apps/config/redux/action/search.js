import Geocoder from 'react-native-geocoding';
Geocoder.init('AIzaSyBzWnlMFdJAmZbbQEQKfHL0vnheiN2T1pc');

export const SET_PICKUP_SUCCESS = 'SET_PICKUP_SUCCESS';
export const SET_DESTINATION_SUCCESS = 'SET_DESTINATION_SUCCESS';

export const searchLocation = payload => async dispatch => {
  try {
    const res = await Geocoder.from({
      latitude: payload.region.latitude,
      longitude: payload.region.longitude,
    });
    if (res.results) {
      if (payload.pickup) {
        dispatch({
          type: SET_PICKUP_SUCCESS,
          payload: {
            location: res.results[0]?.address_components[0]?.short_name || '',
            locationDetail: res.results[0]?.formatted_address || '',
          },
        });
      } else {
        dispatch({
          type: SET_DESTINATION_SUCCESS,
          payload: {
            location: res.results[0]?.address_components[0]?.short_name || '',
            locationDetail: res.results[0]?.formatted_address || '',
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
