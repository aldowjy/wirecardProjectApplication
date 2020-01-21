import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { Text, Button } from 'native-base'
import { NavigationActions } from 'react-navigation'
import wRequest from '../helpers/wRequest'

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
                wRequest.request(parameter.url, parameter.params, () => {  this._hideLoader(); parameter.callbackSuccess() }, () => {  this._hideLoader(); parameter.callbackError() })
            }, 1000)
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

export default WButton