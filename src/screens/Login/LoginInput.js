import React, { Component } from 'react';
import { Item, Icon, Input } from 'native-base';
import { styles } from './style';

export default class LoginInput extends Component {
    _renderEye() {
        if (this.props.isPassword) {
            return <Icon name='eye' style={{color: '#fed9a1'}}/>
        }
    }

    render() {
        return (
            <Item rounded style={styles.formItem}>
                <Icon name={this.props.icon} style={styles.formIcon}/>
                <Input placeholder={this.props.placeholder} placeholderTextColor='#cccccc' onChangeText={this.props.change}/>
                {this._renderEye()}
            </Item>
        );
    }
}