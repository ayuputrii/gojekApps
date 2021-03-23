import {SET_DESTINATION_SUCCESS, SET_PICKUP_SUCCESS} from '../action/search';

const initialState = {
  pickupLocation: '',
  pickupLocationDetail: '',
  destinationLocation: '',
  destinationLocationDetail: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PICKUP_SUCCESS:
      return {
        ...state,
        pickupLocation: action.payload.location,
        pickupLocationDetail: action.payload.locationDetail,
      };
    case SET_DESTINATION_SUCCESS:
      return {
        ...state,
        destinationLocation: action.payload.location,
        destinationLocationDetail: action.payload.locationDetail,
      };
    default:
      return state;
  }
};

export default searchReducer;
