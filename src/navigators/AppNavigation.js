import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';

const ScreenStack = createStackNavigator({
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        title: 'Login'
      }
    },
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        title: 'Screen'
      }
    }
  }, {headerMode: 'none'})

export default createAppContainer(ScreenStack);
