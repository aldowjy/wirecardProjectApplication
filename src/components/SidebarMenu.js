import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class SideBarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
       postMenu: [],
       postAccount: []
    }
  }
  
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  async _getMenu() {
    return fetch('http://127.0.0.1:3000/menu')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          postMenu: responseJson
        })
      })
      .catch((error) => {
          console.log(error);
      });
  }

  async _getAccount() {
    return fetch('http://10.247.39.83:3000/post')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          postAccount: responseJson
        })
      })
      .catch((error) => {
          console.log(error);
      });
  }

  componentDidMount() {
    this._getMenu();
    this._getAccount();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={{color: '#fff'}}>MENU</Text>
          <Icon style={{color: '#fff'}} name='close'/>
        </View>
        <View style={styles.headerBar}>
          <View style={{backgroundColor: '#006884', paddingVertical: 8, paddingHorizontal: 20, borderRightWidth:3, borderRightColor: '#9ed3f1'}}>
            <Icon style={{color: '#ffffff'}} name='person'/>
          </View>
          <View style={{backgroundColor: '', paddingHorizontal: 15, flexDirection:'row'}}>
            <Text style={{color: '#006884'}}>Welcome, </Text>
            <Text style={{color: '#006884', fontWeight: 'bold'}}>{this.props.userId}</Text>
          </View>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>Company ID:&emsp;&emsp;&emsp;</Text>
            <Text style={styles.viewValue}>{this.props.companyId}</Text>
          </View>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>Company Name:&emsp;</Text>
            <Text style={styles.viewValue}>Company 1</Text>
          </View>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>User ID:&emsp;&emsp;&emsp;&emsp;&emsp;</Text>
            <Text style={styles.viewValue}>{this.props.userId}</Text>
          </View>
        </View>
        <Content style={styles.menuBar}>
          <View style={{width: '100%'}}>
              {/* <View style={styles.menuView}>
                <Icon name='home' style={styles.sideMenuIcon} />
                <Text style={styles.menuText} onPress={this.navigateToScreen('HomeScreen')} > Dashboard </Text>
              </View> */}
              {
                this.state.postMenu.map(post => {
                  return <TouchableOpacity onPress={this.navigateToScreen('SingleTransferScreen')}>
                            <View style={styles.menuView}>
                              <Icon name={post.menuIcon} style={styles.sideMenuIcon}/>
                              <Text style={styles.menuText}>{post.menuName}</Text>
                            </View>
                          </TouchableOpacity>
                })
              }
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyId: state.userState.company.companyId,
    userId: state.userState.userId
  }
}

export default connect(mapStateToProps)(SideBarMenu)

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  titleBar: {
    backgroundColor: '#f7931d',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerBar: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  statusBar: {
    backgroundColor: '#fed9a1',
    paddingLeft: 75,
    paddingRight: 10,
    paddingVertical: 5,
  },
  viewStatus: {
    flexDirection:'row',
    paddingVertical: 2
  },
  viewLabel: {
    color: '#000000',
    fontSize: 12
  },
  viewValue: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold'
  },
  menuBar: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  sideMenuIcon: {
    marginRight: 10,
    marginLeft: 20,
    fontSize: 21
  },
  menuLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#e2e2e2',
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuText:{
    fontSize: 14,
    paddingVertical: 15,
    width: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  }
};