import React, { Component } from 'react';
import { Alert, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Thumbnail, Text, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { styles } from './style';
import { image } from '../../helpers/image';
import { languages } from '../../helpers/language';
import WInput from '../../components/WInput';
import WButton from '../../components/WButton';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {}
    };
  }

  render() {
    const { navigation } = this.props;
    const userId = this.state.params.userId;

    const parameter = {
      url: 'http://192.168.4.124:3000/users?userId=' + userId,
      method: 'GET',
      params: this.state.params,
      callbackSuccess: () => navigation.navigate('HomeScreen'),
      callbackError: () => Alert.alert('Alert', 'The Credential is Failed')
    }

    return (
      <Container>
        <StatusBar backgroundColor="#f2e8da" barStyle="dark-content" />
        <ImageBackground source={image.background_bni} style={{flex: 1}}>
          <Grid>
            <Row style={styles.headerView} size={12}>
              <Thumbnail square source={image.header_bar} style={styles.headerImageView} />
            </Row>
            <Row size={78}>
                <Grid>
                  <Content>
                    <Col style={styles.contentView}>
                      <Row>
                        <Col style={styles.contentHeaderView}>
                          <Text style={styles.contentHeaderWelcomeView}>{languages.welcome}</Text>
                          <Text style={styles.contentHeaderNameView}>{languages.bni}</Text>
                          <Text style={styles.contentHeaderLongView}>{languages.corporate}</Text>
                        </Col>
                      </Row>
                      <Row style={styles.contentBodyView}>
                        <Col>
                          <Form>
                              <WInput icon="briefcase" placeholder={languages.inputCompanyId} change={value => this.setState({params: {...this.state.params, companyId: value}})} value={this.state.params.companyId} loginForm/>
                              <WInput icon="person" placeholder={languages.inputUserId} change={value => this.setState({params: {...this.state.params, userId: value}})} value={this.state.params.userId} loginForm/>
                              <WInput icon="lock" placeholder={languages.inputPassword} change={value => this.setState({params: {...this.state.params, password: value}})} value={this.state.params.password} maxLength={8} loginForm isPassword/>
                          </Form>
                          <Row style={styles.buttonView}>
                            <WButton style={styles.buttonGeneral} text={languages.buttonClear} onPress={() => this.setState({params: {}})}/>
                            <WButton style={styles.buttonConfirm} text={languages.buttonConfirm} isService parameter={parameter}/>
                          </Row>
                          <Row style={styles.forgotView}>
                            <Icon name='lock' style={styles.viewForgotIcon}/>
                            <Col style={styles.viewText}>
                              <TouchableOpacity onPress={() => Alert.alert('UPS!')}><Text style={styles.viewForgotTextLink}>{languages.forgot}</Text></TouchableOpacity>
                              <Text style={styles.viewForgotText}>{languages.byPressing}</Text>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Row style={styles.footerView}>
                        <Thumbnail square large source={image.bni_direct}/>
                        <Thumbnail square large source={image.bni_direct} />
                    </Row>
                  </Content>
                </Grid>
            </Row>
          </Grid>
        </ImageBackground>
      </Container>
    );
  }
}

export default LoginScreen
