import { createStackNavigator } from "react-navigation";

import HomeScreen from "../screens/LoginScreen";
import MobileLoginScreen from "../screens/MobileLoginScreen";
import MessageCodeScreen from "../screens/MessageCodeScreen";

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  MobileLogin: {
    screen: MobileLoginScreen
  },
  MessageCode: {
    screen: MessageCodeScreen
  }
});
