import React, { Component } from 'react';
import { Container, View, Content, Thumbnail, Text, Button, Form, Input, Item, Icon} from 'native-base';
import { connect } from 'react-redux';
import ActionType from '../reducers/globalActionType';

class LoginScreen extends Component {
  render() {
    const enabled = this.props.companyId.length > 0 && this.props.userId.length > 0;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.header}>
            <Thumbnail square large source={require('../assets/wirecardlogo.png')} marginTop={50}/>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>LOGIN</Text>
          </View>
          <View style={{height: 359, justifyContent:"space-between", backgroundColor: 'transparent'}}>
            <Form style={{backgroundColor: '#ccc', marginTop: 20}}>
                  <Item>
                      <Icon name='briefcase' style={{color: '#0D1322'}}/>
                      <Input placeholder="Company ID" onChangeText={(text) => this.props.changeCompanyInput(text)}/>
                  </Item>
                  <Item last>
                      <Icon name='person' style={{color: '#0D1322'}}/>
                      <Input placeholder="User ID" onChangeText={(text) => this.props.changeUserInput(text)}/>
                  </Item>
              </Form>
              <Button style={enabled ? styles.button1 : styles.button2} onPress={() => this.props.navigation.navigate('HomeScreen')} disabled={!enabled} block>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>LOGIN</Text>
              </Button>
          </View>
          <View style={{height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
            <Text style={{textAlign: 'center', fontSize: 14, paddingRight: 50, paddingLeft: 50}}>All rights reserved. Copyright &#169; 2018 Wirecard Technology Indonesia</Text>
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
    userId: state.userState.userId
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
    backgroundColor: '#e8e8e8',
  },
  header: {
    backgroundColor: '#0D1322',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 250,
  },
  button1: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: '#0D1322',
  },
  button2: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: '#CCCCCC',
  }
};
