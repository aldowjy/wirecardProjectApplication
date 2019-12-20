import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class AccountProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#0D1322'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{alignItems: 'center'}}>
            <Title>Account Profile Screen</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name='home' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
