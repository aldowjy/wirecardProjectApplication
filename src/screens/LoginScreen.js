import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Thumbnail, Text, Button, Form, Input, Item, Icon} from 'native-base';
import { connect } from 'react-redux';
import ActionType from '../reducers/globalActionType';

class LoginScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={styles.viewContent}>
              <View style={styles.viewContentHeader}>
                <Thumbnail source={require('../assets/wirecardlogo.png')}/>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>LOGIN</Text>
              </View>
              <View style={styles.viewContentBody}>
                <Form>
                    <Item rounded style={styles.formItem}>
                      <Icon name='briefcase' style={styles.formIcon}/>
                      <Input placeholder="Company ID*" onChangeText={(text) => this.props.changeCompanyInput(text)}/>
                    </Item>
                    <Item rounded style={styles.formItem}>
                      <Icon name='person' style={styles.formIcon}/>
                      <Input placeholder="User ID*" onChangeText={(text) => this.props.changeUserInput(text)}/>
                    </Item>
                    <Item rounded style={styles.formItem}>
                      <Icon name='lock' style={styles.formIcon}/>
                      <Input placeholder="Password*" onChangeText={(text) => this.props.changeUserInput(text)}/>
                      <Icon name='eye' style={{color: '#fed9a1'}}/>
                    </Item>
                </Form>
                <View style={styles.viewButton}>
                  <Button rounded style={styles.buttonGeneral}>
                    <Text>Clear</Text>
                  </Button>
                  <Button rounded style={styles.buttonConfirm} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Text>Login</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.viewContentFooter}><Text></Text></View>
            </View>
            <View style={styles.viewfooter}>
              <Text style={styles.footerContent}>All rights reserved. Copyright &#169; 2018 Wirecard Technology Indonesia</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

//Call global state and change to props
const mapStateToProps = (state) => {
  return {
    companyId: state.userState.company.companyId,
    userId: state.userState.userId,
    password: state.userState.password
  }
}

const mapDispateToProps = (dispatch) => {
  return {
    changeCompanyInput: (text) => {dispatch({type: ActionType.CHANGE_COMPANY_ID, text})},
    changeUserInput: (text) => {dispatch({type: ActionType.CHANGE_USER_ID, text})}
  }
}

export default connect(mapStateToProps, mapDispateToProps)(LoginScreen)

const styles = {
  container: {
    backgroundColor: '#f2e8da',
  },
  viewHeader: {
    backgroundColor: '#0D1322',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 250,
  },
  viewContent: {
    backgroundColor: '#006884',
    borderRadius: 20,
    marginHorizontal: 30,
    marginVertical: 20
  },
  viewContentHeader: {
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10
  },
  viewContentBody: {
    backgroundColor: 'white',
    padding: 20
  },
  viewContentfooter: {
  },
  formItem: {
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: '#fed9a1',
    backgroundColor: '#ffffff'
  },
  formIcon: {
    color: '#fed9a1',
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#fed9a1'
  },
  viewButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonGeneral: {
    backgroundColor: '#f7931d',
    width: 120,
    height: 45,
    justifyContent: 'center'
  },
  buttonConfirm: {
    backgroundColor: '#006884',
    width: 120,
    height: 45,
    justifyContent: 'center'
  },
  viewfooter: {
    justifyContent: 'center'
  },
  footerContent: {
    textAlign: 'center',
    paddingHorizontal: 50
  }
};
