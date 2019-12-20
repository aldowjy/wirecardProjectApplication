import React, { Component } from 'react';
import { View, Text } from 'native-base';

export default class OwnAccountList extends Component {
  render() {
    return (
        <View style={{marginVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontWeight: 'bold'}}>{this.props.number}</Text>
            <Text>{this.props.name} ({this.props.currency})</Text>
            {/* <View style={{width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 10}} /> */}
            <View style={{width: '100%', height: 1, backgroundColor: 'grey', marginTop: 10}} />
        </View>
    );
  }
}
