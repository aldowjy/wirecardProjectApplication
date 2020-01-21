import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Login from '../screens/LoginScreen'
import Home from '../screens/HomeScreen'
import SingleTransfer from '../screens/SingleTransferScreen'
import AccountList from '../screens/AccountListScreen'
import AccountProfile from '../screens/AccountProfileScreen'
import AccountDetail from '../screens/AccountDetailScreen'
import SidebarMenu from '../components/SidebarMenu'

const MainStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  SingleTransferScreen: {
    screen: SingleTransfer,
    navigationOptions: {
      title: 'Single Transfer'
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
  },
  AccountDetailScreen: {
    screen: AccountDetail,
    navigationOptions: {
      title: 'Account Detail'
    }
  }
}, {
  headerMode: 'none'
})

const Drawer = createDrawerNavigator({
  MainStack: {
    screen: MainStack
  }
}, {
  contentComponent: SidebarMenu
})

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
