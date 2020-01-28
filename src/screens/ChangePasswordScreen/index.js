import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Title, Text, Right, Content, View, Form } from 'native-base'
import { styles } from '../AccountProfileScreen/style'
import { styles as stylesLogin } from '../LoginScreen/style'
import WInput from '../../components/WInput'
import { validate } from '../../redux/actions/validationAction';
import { connect } from 'react-redux';

class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props)
        this._wValidation = this._wValidation.bind(this);
        this.state = {
             oldPassword: '',
             newPassword: '',
             confirmPassword: '',
             oldPasswordError: '',
             newPasswordError: '',
             confirmPasswordError: ''
        }
    }
    
    _wValidation() {
        const { validate } = this.props;
        console.log("Password: ", this.state.oldPassword)
        const oldPasswordError = validate('oldPassword', this.state.oldPassword)
        const newPasswordError = validate('newPassword', this.state.newPassword)
        const confirmPasswordError = validate('confirmPassword', this.state.confirmPassword)
        console.log("Hasil Validasi: ", oldPasswordError)
        if (!oldPasswordError) {
          Alert.alert('Details are valid!')
        }
      }

    render() {
        const { messageError, validate } = this.props;
        return (
            <Container>
                <Header style={styles.viewHeader}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={styles.bodyHeader}>
                    <Title>Change Password</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Icon name='home' />
                    </Button>
                </Right>
                </Header>
                <Content>
                    <View style={{margin: 20}}>
                        <Form>
                            <WInput
                                placeholder="Old Password"
                                change={value => this.setState({oldPassword: value.trim()})}
                                blur={() => this.setState({ oldPasswordError: validate('oldPassword', this.state.oldPassword) })}
                                error={messageError}
                                messageError={messageError}
                                isPassword
                            />
                            <WInput
                                placeholder="New Password"
                                change={value => this.setState({newPassword: value.trim()})}
                                blur={() => this.setState({ newPasswordError: validate('newPassword', this.state.newPassword) })}
                                error={messageError}
                                messageError={messageError}
                                isPassword
                            />
                            <WInput
                                placeholder="Confirm Password"
                                change={value => this.setState({confirmPassword: value.trim()})}
                                blur={() => this.setState({ confirmPasswordError: validate('confirmPassword', this.state.newPassword) })}
                                error={messageError}
                                messageError={messageError}
                                isPassword
                            />
                        </Form>
                    </View>
                    <View style={stylesLogin.viewButton}>
                        <Button style={stylesLogin.buttonConfirm} onPress={() => this._wValidation()}>
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        messageError: state.validationState.messageError
    }
}

const mapDispateToProps = (dispatch) => {
    return {
      validate: (field, value) => dispatch(validate(field, value))
    }
}
  
export default connect(mapStateToProps, mapDispateToProps)(ChangePasswordScreen)