
import { createStackNavigator } from 'react-navigation';

import StartScreen from '../screens/Start'
import HomeScreen from '../screens/Home'
import AboutScreen from '../screens/About'


export default createStackNavigator({
  Start: {
    screen: StartScreen
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
});
