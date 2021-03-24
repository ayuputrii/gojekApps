import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  SearchLocation,
  SearchDestination,
  SetDestination,
  SetOriginPickup,
  ConfirmOrder,
  Booking,
  Payment,
} from '../../screens';

const RouterNavigation = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    SearchLocation: {
      screen: SearchLocation,
    },
    SearchDestination: {
      screen: SearchDestination,
    },
    SetDestination: {
      screen: SetDestination,
    },
    SetOriginPickup: {
      screen: SetOriginPickup,
    },
    ConfirmOrder: {
      screen: ConfirmOrder,
    },
    Booking: {
      screen: Booking,
    },
    Payment: {
      screen: Payment,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RouterNavigation);
