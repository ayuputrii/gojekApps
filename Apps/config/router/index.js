import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  SearchLocation,
  SearchDestination,
  Payment,
  SetDestination,
  SetOriginPickup,
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
    Payment: {
      screen: Payment,
    },
    SetDestination: {
      screen: SetDestination,
    },
    SetOriginPickup: {
      screen: SetOriginPickup,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(RouterNavigation);
