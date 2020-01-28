import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, View, Content, Text, Form, Icon } from 'native-base';
import { languages } from '../../helpers/language';
import { styles } from './style';
import WInput from '../../components/WInput';
import WButton from '../../components/WButton';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {},
    };
  }
  
  render() {
    const { navigation } = this.props;

    const parameter= {
      url: 'http://102.27.1.1:3000/',
      method: 'GET',
      params: this.state.params,
      callbackSuccess: () => navigation.navigate('HomeScreen'),
      callbackError: () => Alert.alert('Alert', 'The Credential is Failed')
    }

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
                    <WInput icon="briefcase" placeholder={languages.inputCompanyId} change={value => this.setState({params: {...this.state.params, companyId: value}})} value={this.state.params.companyId} loginForm/>
                    <WInput icon="person" placeholder={languages.inputUserId} change={value => this.setState({params: {...this.state.params, userId: value}})} value={this.state.params.userId} loginForm/>
                    <WInput icon="lock" placeholder={languages.inputPassword} change={value => this.setState({params: {...this.state.params, password: value}})} value={this.state.params.password} maxLength={8} loginForm isPassword/>
                </Form>
                <View style={styles.viewButton}>
                  <WButton style={styles.buttonGeneral} text={languages.buttonClear} onPress={() => Alert.alert('UPS!')}/>
                  <WButton style={styles.buttonConfirm} text={languages.buttonConfirm} isService parameter={parameter}/>
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

export default LoginScreen
