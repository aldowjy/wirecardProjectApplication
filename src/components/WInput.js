import React, { Component } from 'react';
import { View, Text, Item, Icon, Input } from 'native-base';
import { TouchableOpacity } from 'react-native';

export default class WInput extends Component {
    _loginForm() {
        if (this.props.loginForm) {
            return <Icon name={this.props.icon} style={this.props.messageError ? styles.errorIcon : styles.formIcon}/>;
        }
    }
    _renderEye() {
        if (this.props.isPassword) {
            return <TouchableOpacity><Icon name='eye' style={this.props.messageError ? styles.eyeColorError : styles.eyeColor}/></TouchableOpacity>
        }
    }

    render() {
        let text;
        if (this.props.messageError) {
            text = <Text style={styles.messageError}>{this.props.messageError}</Text>;
        }

        return (
            <View style={{marginVertical: 10}}>
                <Item rounded style={this.props.messageError ? styles.errorItem : styles.formItem}>
                    {this._loginForm()}
                    <Input
                        placeholderTextColor='#cccccc'
                        placeholder={this.props.placeholder}
                        onChangeText={this.props.change}
                        onBlur={this.props.blur}
                        error={this.props.passwordError}
                        value={this.props.value}
                        secureTextEntry={true}
                        maxLength={this.props.maxLength}
                        secureTextEntry={this.props.isPassword}/>
                    {this._renderEye()}
                </Item>
                {text}
            </View>
        );
    }
}


const styles = {
    formItem: {
        paddingHorizontal: 10,
        marginBottom: 0,
        fontSize: 10,
        borderColor: '#fed9a1',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
    errorItem: {
        paddingHorizontal: 10,
        marginBottom: 0,
        fontSize: 10,
        borderColor: 'red',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
    },
    formIcon: {
        color: '#fed9a1',
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: '#fed9a1'
    },
    errorIcon: {
        color: 'red',
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: 'red'
    },
    eyeColor: {
        color: '#fed9a1'
    },
    eyeColorError: {
        color: 'red'
    },
    messageError: {
        color: 'red',
        marginLeft: 10,
    }
}