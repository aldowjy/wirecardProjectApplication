import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, Button } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { callRequest } from '../redux/actions/generalAction';

class WButton extends Component {
    constructor(props) {
        super(props)
        this._renderButton = this._renderButton.bind(this);
        this._showLoader = this._showLoader.bind(this);
        this._hideLoader = this._hideLoader.bind(this);
        this.state = {
             isLoading: false
        }
    }
    
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.navigate(navigateAction);
    }

    _showLoader() { this.setState({isLoading: true}) }
    _hideLoader() { this.setState({isLoading: false}) }


    _renderButton() {
        const { parameter, callService } = this.props

        this._showLoader()
        if(this.props.isService) {
            callService(parameter.url, parameter.method, parameter.params,
            () => {this._hideLoader(); parameter.callbackSuccess();},
            () => {this._hideLoader(); parameter.callbackError();})
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
            <Button style={this.props.style} onPress={this._renderButton} parameter={this.props.parameter} disabled={isLoggedIn}>
                {button}
            </Button>
        );
    }
}

const mapDispateToProps = (dispatch) => {
    return {
      callService: (url, method, params, callbackSuccess, callbackError) => dispatch(callRequest(url, method, params, callbackSuccess, callbackError)),
    }
  }
  
export default connect(null, mapDispateToProps)(WButton)