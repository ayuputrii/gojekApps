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
    console.log('res', res);
    if (res.results) {
      const data = {
        latitude: payload.region.latitude,
        longitude: payload.region.longitude,
        location: res.results[0]?.address_components.filter(r => r?.types.join('') === 'route')[0]?.short_name || '',
        locationDetail: res.results[0]?.formatted_address || '',
      };
      if (payload.pickup) {
        dispatch({
          type: SET_PICKUP_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: SET_DESTINATION_SUCCESS,
          payload: data,
        });
      }
    }
  } catch (error) {
    console.log('lor',error);
  }
};
