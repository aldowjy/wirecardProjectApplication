import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class AccountListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> AccountListScreen </Text>
        <Button onPress={() => this.props.navigation.goBack()}><Text>BACK</Text></Button>
      </View>
    );
  }
}
