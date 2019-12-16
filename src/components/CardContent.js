import React, { Component } from 'react';
import { Content, View, Grid, Col, Button, Text, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class CardContent extends Component {
  render() {
    return (
      <View>
        <Grid>
          <Col style={{ marginHorizontal: 20, marginVertical: 15 }}>
            <Button iconLeft rounded onPress={() => this.props.navigation.navigate('AccountListScreen')}><Icon name={this.props.icon} /><Text style={{fontSize: 12}}>{this.props.title}</Text></Button>
          </Col>
        </Grid>
      </View>
    );
  }
}

export default withNavigation(CardContent)