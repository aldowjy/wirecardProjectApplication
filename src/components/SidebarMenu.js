import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Content, View, Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { languages } from '../helpers/language';

class SideBarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
       postMenu: []
    }
  }
  
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  async _getMenu() {
    return fetch('http://102.27.1.1:3000/menu')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          postMenu: responseJson
        })
      })
  }

  componentDidMount() {
    this._getMenu();
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={{color: '#fff'}}>{languages.menu}</Text>
          <Icon style={{color: '#fff'}} name='close' onPress={() => this.props.navigation.closeDrawer()}/>
        </View>
        <View style={styles.headerBar}>
          <View style={styles.headerLogoBar}>
            <Icon style={{color: '#fff'}} name='person'/>
          </View>
          <View style={styles.viewWelcome}>
            <Text style={{color: '#006884'}}>{languages.welcoming}</Text>
            <Text style={{color: '#006884', fontWeight: 'bold'}}>userId</Text>
          </View>
        </View>
        <View style={styles.statusBar}>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>{languages.companyId}&emsp;&emsp;&emsp;</Text>
            <Text style={styles.viewValue}>companyId</Text>
          </View>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>{languages.companyName}&emsp;</Text>
            <Text style={styles.viewValue}>companyName</Text>
          </View>
          <View style={styles.viewStatus}>
            <Text style={styles.viewLabel}>{languages.userId}&emsp;&emsp;&emsp;&emsp;&emsp;</Text>
            <Text style={styles.viewValue}>userId</Text>
          </View>
        </View>
        <Content style={styles.menuBar}>
          <View style={{width: '100%'}}>
              {
                this.state.postMenu.map(post => {
                  return <TouchableOpacity onPress={this.navigateToScreen(post.menuScreen)} key={post.menuId}>
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

// const mapStateToProps = (state) => {
//   return {
//     companyId: state.userState.company.companyId,
//     companyName: state.userState.company.name,
//     userId: state.userState.userId
//   }
// }

export default SideBarMenu

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
  headerLogoBar: {
    backgroundColor: '#006884',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRightWidth:3,
    borderRightColor: '#9ed3f1'
  },
  statusBar: {
    backgroundColor: '#fed9a1',
    paddingLeft: 75,
    paddingRight: 10,
    paddingVertical: 5,
  },
  viewWelcome: {
    paddingHorizontal: 15,
    flexDirection:'row'
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