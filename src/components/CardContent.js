import React, { Component } from 'react';
import { View, Button, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class CardContent extends Component {
  render() {
    return (
      <View style={{marginVertical: 15}}>
        <Button onPress={() => this.props.navigation.navigate('AccountListScreen')} style={styles.myButton} rounded iconLeft>
            <Icon name={this.props.icon} />
            <Text style={{fontSize: 12, textAlign: 'center'}}>{this.props.title}</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(CardContent)

const styles = {
    myButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12
    }
}