
import { createStackNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstPage'
import HomeScreen from '../screens/Home'
import AboutScreen from '../screens/About'


export default createStackNavigator({
  First: {
    screen: FirstScreen
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
});
