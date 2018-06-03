
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home'
import AboutScreen from '../screens/About'


export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
});