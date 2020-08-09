import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

export default class OwnAccountList extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.check(this.props.name)}>
        <View style={styles.container} >
            <Text style={{fontWeight: 'bold'}}>{this.props.number}</Text>
            <Text>{this.props.name} ({this.props.currency})</Text>
            <View style={styles.viewLine} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  viewLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginTop: 10
  }
}