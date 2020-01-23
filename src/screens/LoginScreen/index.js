import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, View, Content, Text, Form, Icon } from 'native-base';
import { connect } from 'react-redux';
import { callRequest } from '../../redux/actions/generalAction';
import { languages } from '../../helpers/language';
import { styles } from './style';
import LoginInput from './LoginInput';
import WButton from '../../components/WButton';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {},
    };
  }
  
  render() {
    const { navigation, callService } = this.props;
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
                    <LoginInput icon="briefcase" placeholder={languages.inputCompanyId} change={value => this.setState({params: {...this.state.params, companyId: value}})} value={this.state.params.companyId}/>
                    <LoginInput icon="person" placeholder={languages.inputUserId} change={value => this.setState({params: {...this.state.params, userId: value}})} value={this.state.params.userId}/>
                    <LoginInput icon="lock" placeholder={languages.inputPassword} change={value => this.setState({params: {...this.state.params, password: value}})} value={this.state.params.password} maxLength={8} isPassword/>
                </Form>
                <View style={styles.viewButton}>
                  <WButton style={styles.buttonGeneral} text={languages.buttonClear}/>
                  <WButton style={styles.buttonConfirm} text={languages.buttonConfirm} onPress={() => { callService('http://127.0.0.1:3000/users/', 'GET', this.state.params, () => navigation.navigate('HomeScreen'), () => Alert.alert('Alert', 'The Credential is Failed'))}}/>
                </View>
                <View style={styles.viewForgot}>
                  <Icon name='lock' style={styles.viewForgotIcon}/>
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

const mapDispateToProps = (dispatch) => {
  return {
    callService: (url, method, params, callbackSuccess, callbackError) => dispatch(callRequest(url, method, params, callbackSuccess, callbackError)),
  }
}

export default connect(null, mapDispateToProps)(LoginScreen)
