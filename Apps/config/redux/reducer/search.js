import {SET_DESTINATION_SUCCESS, SET_PICKUP_SUCCESS} from '../action/search';

const initialState = {
  pickupLocation: '',
  pickupLocationDetail: '',
  pickupLocationLatitude: '',
  pickupLocationLongitude: '',
  destinationLocation: '',
  destinationLocationDetail: '',
  destinationLocationLatitude: '',
  destinationLocationLongitude: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICKUP_SUCCESS:
      return {
        ...state,
        pickupLocation: action.payload.location,
        pickupLocationDetail: action.payload.locationDetail,
        pickupLocationLatitude: action.payload.latitude,
        pickupLocationLongitude: action.payload.longitude,
      };
    case SET_DESTINATION_SUCCESS:
      return {
        ...state,
        destinationLocation: action.payload.location,
        destinationLocationDetail: action.payload.locationDetail,
        destinationLocationLatitude: action.payload.latitude,
        destinationLocationLongitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default searchReducer;
