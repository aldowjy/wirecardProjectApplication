import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';
import AccountList from '../screens/AccountListScreen';
import AccountProfile from '../screens/AccountProfileScreen';
import SidebarMenu from '../components/SidebarMenu';

export const MainStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  AccountListScreen: {
    screen: AccountList,
    navigationOptions: {
      title: 'Account List'
    }
  },
  AccountProfileScreen: {
    screen: AccountProfile,
    navigationOptions: {
      title: 'Account Profile'
    }
  }
}, {
  headerMode: 'none'
});

export const Drawer = createDrawerNavigator({
  MainStack: {
    screen: MainStack
  }
}, {
  contentComponent: SidebarMenu
});

export const ScreenStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      header: null,
      gesturesEnabled: false
    }
  },
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
}, {
  headerMode: 'none'
})

export default createAppContainer(ScreenStack);
