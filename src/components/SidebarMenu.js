import React, { Component } from 'react';
import { Container, Content, Thumbnail, View, Text, Icon } from 'native-base';
import { NavigationActions } from 'react-navigation';

class SideBarMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  
  render() {
    return (
      <Container style={styles.sideMenuContainer}>
        <Thumbnail source={require('../assets/wirecardlogo.png')} style={styles.sideMenuProfileIcon} />
        <Content style={styles.menuContainer}>
          <View style={styles.menuLine} />
          <View style={{width: '100%'}}>
              <View style={styles.menuView}>
                <Icon name='home' style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={this.navigateToScreen('HomeScreen')} > Dashboard </Text>
              </View>
              <View style={styles.menuView}>
                <Icon name='person' style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={this.navigateToScreen('AccountProfileScreen')} > Account Profile </Text>
              </View>
              <View style={styles.menuView}>
                <Icon name='list' style={styles.sideMenuIcon}/>
                <Text style={styles.menuText} onPress={this.navigateToScreen('AccountListScreen')} > Account List </Text>
              </View>
              <View style={styles.menuView}>
                <Icon name='settings' style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={() => alert("Go to Settings")} > Settings </Text>
              </View>
          </View>
        </Content>
        <View style={styles.menuLine} />
        <View style={{alignSelf: 'baseline'}}>
          <View style={styles.menuView}>
            <Icon name='exit' style={styles.sideMenuIcon} />
            <Text style={styles.menuText} onPress={this.navigateToScreen('LoginScreen')} > Logout </Text>
          </View>
        </View>
      </Container>
    );
  }
}

export default SideBarMenu

const styles = {
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  sideMenuProfileIcon: {
    width: 100, 
    height: 100, 
    borderRadius: 100/2
  },
  sideMenuIcon: {
    width: 28, 
    height: 28, 
    marginRight: 10,
    marginLeft: 20
  },
  menuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 20
  },
  menuLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
    marginTop: 15
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  menuText:{
    fontSize: 15,
    color: '#222222',
  }
};