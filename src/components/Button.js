import React, { Component } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { Text, Button } from 'native-base'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import wirecardRequest from '../helpers/wirecardRequest';

class WButton extends Component {
    constructor(props) {
        super(props)
        this._navigateToScreen = this._navigateToScreen.bind(this);
        this._renderButton = this._renderButton.bind(this);
        this._showLoader = this._showLoader.bind(this);
        this._hideLoader = this._hideLoader.bind(this);
        this.state = {
             isLoading: false
        }
    }
    
    _showLoader() { this.setState({isLoading: true}) }
    _hideLoader() { this.setState({isLoading: false}) }
    

    _navigateToScreen(route) {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.navigate(navigateAction);
    }

    _renderButton() {
        const {parameter} = this.props

        this._showLoader()
        if(this.props.isService) {
            setTimeout(() => {
                wirecardRequest.request(parameter.url, parameter.params, () => {  this._hideLoader(); parameter.callbackSuccess() }, () => {  this._hideLoader(); parameter.callbackError() })
            }, 2000)
        } else {
            this._hideLoader()
            this.props.onPress()
        }
    }

    render() {
        const isLoggedIn = this.state.isLoading;
        let button;

        if (!isLoggedIn) {
            button = <Text uppercase={false}>{this.props.text}</Text>;
        } else {
            button = <ActivityIndicator color={"#f15921"} size={"small"} />;
        }

        return(
            <Button style={this.props.style} onPress={this._renderButton} >
                {button}
            </Button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companyId: state.userState.company.companyId,
        userId: state.userState.userId,
        password: state.userState.password,
        id: state.userState.id,
        data: state.userState
    }
}

export default connect(mapStateToProps)(WButton)