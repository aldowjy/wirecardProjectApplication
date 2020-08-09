import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Content, Text, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { languages } from '../helpers/language';
import * as selectors from '../helpers/selector';
import { createStructuredSelector } from 'reselect';

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
    return fetch('http://localhost:3000/menu')
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
    const { userId } = this.props.accountUser;
    const { companyId, name } = this.props.accountUser.company;
    const { postMenu } = this.state;

    return (
      <Container>
        <Grid>
          <Row style={styles.titleBar} size={4}>
            <Text style={{color: '#fff', alignSelf: 'center'}}>{languages.menu}</Text>
            <Icon style={{color: '#fff'}} name='close' onPress={() => this.props.navigation.closeDrawer()}/>
          </Row>
          <Row style={styles.headerBar} size={6}>
            <Row style={styles.headerLogoBar} size={10}>
              <Icon style={{color: '#fff'}} name='person'/>
            </Row>
            <Row style={styles.viewWelcome} size={90}>
              <Text style={{color: '#006884'}}>{languages.welcoming}</Text>
              <Text style={{color: '#006884', fontWeight: 'bold'}} numberOfLines={1}>{userId}</Text>
            </Row>
          </Row>
          <Col style={styles.statusBar} size={10}>
            <Row style={styles.viewStatus}>
              <Col><Text style={styles.viewLabel}>{languages.companyId}</Text></Col>
              <Col><Text style={styles.viewValue} numberOfLines={1}>: {companyId}</Text></Col>
            </Row>
            <Row style={styles.viewStatus}>
              <Col><Text style={styles.viewLabel}>{languages.companyName}</Text></Col>
              <Col><Text style={styles.viewValue} numberOfLines={1}>: {name}</Text></Col>
            </Row>
            <Row style={styles.viewStatus}>
              <Col><Text style={styles.viewLabel}>{languages.userId}</Text></Col>
              <Col><Text style={styles.viewValue} numberOfLines={1}>: {userId}</Text></Col>
            </Row>
          </Col>
          <Row size={80}>
            <Content>
              {
                postMenu.map(post => {
                  return <TouchableOpacity onPress={this.navigateToScreen(post.menuScreen)} key={post.menuId}>
                            <Row>
                              <Row size={25}>
                                <Icon name={post.menuIcon} style={styles.sideMenuIcon}/>
                              </Row>
                              <Row style={styles.sideView} size={75}>
                                <Text style={styles.sideMenuText}>{post.menuName}</Text>
                                <Icon name='md-arrow-dropright' style={styles.sideMenuIcon}/>
                              </Row>
                            </Row>
                          </TouchableOpacity>
                })
              }
            </Content>
          </Row>
        </Grid>
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

const mapStateToProps = createStructuredSelector({
  accountUser: selectors.makeSelectAccountUser,
})

export default connect(mapStateToProps, null)(SideBarMenu)

const styles = {
  titleBar: {
    backgroundColor: '#f7931d',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    paddingLeft: 50,
    paddingRight: 10,
    paddingVertical: 5,
  },
  viewWelcome: {
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  viewStatus: {
    paddingVertical: 3
  },
  viewLabel: {
    fontSize: 12
  },
  viewValue: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  sideMenuIcon: {
    marginHorizontal: 20,
    fontSize: 26,
    alignSelf: 'center',
  },
  sideView: {
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 15,
  },
  sideMenuText:{
    fontSize: 14,
    alignSelf: 'center',
  }
};