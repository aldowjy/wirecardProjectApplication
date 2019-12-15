import React, { Component } from 'react';
import { Container, View, Content, Thumbnail, Text, Button, Form, Input, Item, Icon} from 'native-base';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        companyId: '',
        userId: '',
    };
  }

  render() {
    const enabled = this.state.companyId.length > 0 && this.state.userId.length > 0;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.header}>
            <Thumbnail square large source={require('../assets/wirecardlogo.png')} marginTop={50}/>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>LOGIN</Text>
          </View>
          <View style={{height: 359, justifyContent:"space-between", backgroundColor: 'transparent'}}>
            <Form style={{backgroundColor: '#ccc', marginTop: 20}}>
                  <Item>
                      <Icon name='briefcase' style={{color: '#0D1322'}}/>
                      <Input placeholder="Company ID" onChangeText={(companyId) => this.setState({companyId})}/>
                  </Item>
                  <Item last>
                      <Icon name='person' style={{color: '#0D1322'}}/>
                      <Input placeholder="User ID" onChangeText={(userId) => this.setState({userId})}/>
                  </Item>
              </Form>
              <Button style={enabled ? styles.button1 : styles.button2} onPress={() => this.props.navigation.navigate('HomeScreen')} disabled={!enabled} block>
                <Text style={{color: '#ffffff', fontWeight: 'bold'}}>LOGIN</Text>
              </Button>
          </View>
          <View style={{height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent'}}>
            <Text style={{textAlign: 'center', fontSize: 14, paddingRight: 50, paddingLeft: 50}}>All rights reserved. Copyright &#169; 2018 Wirecard Technology Indonesia</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
    container: {
      backgroundColor: '#e8e8e8',
    },
    header: {
      backgroundColor: '#0D1322',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 250,
    },
    button1: {
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 6,
      backgroundColor: '#0D1322',
    },
    button2: {
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 6,
      backgroundColor: '#CCCCCC',
    }
  };