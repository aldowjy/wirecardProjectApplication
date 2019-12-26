import React, { Component } from 'react';
import { Container, View, Content, Text, Button, Form, Icon } from 'native-base';
import { connect } from 'react-redux';
import { styles } from './Login/style';
import { languages } from '../helpers/language';
import ActionType from '../reducers/globalActionType';
import LoginInput from './Login/LoginInput';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
  }
  
  _handleClick() {
    const { navigation } = this.props;
    navigation.navigate("HomeScreen");
  }

  render() {
    const {
      changeCompanyInput,
      changeUserInput,
      changePasswordInput
    } = this.props;

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.viewContainer}>
            <View style={styles.viewContent}>
              <View style={styles.viewContentHeader}>
                <Text style={styles.viewContentHeaderWelcome}>{languages.welcome}</Text>
                <Text style={styles.viewContentHeaderName}>{languages.bni}</Text>
                <Text style={styles.viewContentHeaderLong}>{languages.corporate}</Text>
              </View>
              <View style={styles.viewContentBody}>
                <Form>
                    <LoginInput icon="briefcase" placeholder={languages.companyId} change={changeCompanyInput}/>
                    <LoginInput icon="person" placeholder={languages.userId} change={changeUserInput}/>
                    <LoginInput icon="lock" placeholder={languages.password} change={changePasswordInput} isPassword/>
                </Form>
                <View style={styles.viewButton}>
                  <Button rounded style={styles.buttonGeneral}>
                    <Text uppercase={false}>{languages.buttonClear}</Text>
                  </Button>
                  <Button rounded style={styles.buttonConfirm} onPress={this._handleClick}>
                    <Text uppercase={false}>{languages.buttonLogin}</Text>
                  </Button>
                </View>
                <View style={styles.viewForgot}>
                  <Icon style={styles.viewForgotIcon}name='lock'/>
                  <View style={styles.viewText}>
                    <Text style={styles.viewForgotTextLink}>{languages.forgot}</Text>
                    <Text style={styles.viewForgotText}>{languages.byPressing}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.viewContentFooter}></View>
            </View>
            <View style={styles.viewfooter}>
              <Text style={styles.footerContent}>{languages.loginFooterCopyright} &#169; {languages.loginFooterCompany}</Text>
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
    changeUserInput: (text) => {dispatch({type: ActionType.CHANGE_USER_ID, text})},
    changePasswordInput: (text) => {dispatch({type: ActionType.CHANGE_PASSWORD, text})}
  }
}

export default connect(mapStateToProps, mapDispateToProps)(LoginScreen)
