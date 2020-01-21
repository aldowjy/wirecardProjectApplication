import React, { Component } from 'react';
import { Modal, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Container, Content, View, Header, Left, Body, Title, Form, Item, Input, Text, Button, Icon, Right } from 'native-base';
import OwnAccountList from '../components/OwnAccountList';

export default class SingleTransferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: true,
        amount: 0.0,
        post: [],
        modalVisible: false,
        selectedItem: {},
        name: ""
    };
  }
  
  componentDidMount() {
    if (this.state.name != null) {
      this.getAccount()
      this.setState({name: "From Account*"});
    }
    
  }

  async getAccount() {
    return fetch('http://{YOUR_IP_ADDRESS}:3000/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          post: responseJson
        })
      })
      .catch((error) => {
          console.log(error);
      });
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handlerCheck = (data) => {
    this.setState({name: data});
    this.setModalVisible(false);
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#f7931d'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{alignItems: 'center'}}>
            <Title>Single Transfer</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='home' />
            </Button>
          </Right>
        </Header>
        <Content style={{margin: 15}}>
          <View style={{marginTop: 22}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}>
              <View style={{flex: 1,backgroundColor: 'rgba(0,0,0,0.2)'}}>
                <View style ={{flex:1, justifyContent: 'flex-end'}}>
                  <View style={{justifyContent: 'space-between', borderTopLeftRadius: 20, borderTopRightRadius: 20, flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10, backgroundColor: '#f7931d'}}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>From Account</Text>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Icon name='close' style={{color: '#ffffff'}}></Icon>
                    </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor: '#ffffff'}}>
                    {
                      this.state.post.map(post => {
                        return <OwnAccountList key={post.id} number={post.accountNumber} name={post.userName} currency={post.account.currency} id={post.id} check={this.handlerCheck}/>
                      })
                    }
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <Form>
            <Item rounded style={{marginBottom: 20, borderColor: '#f7931d'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, flex: 1}}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>{this.state.name}</Text>
                    <Icon name='search' style={{color: '#f7931d'}}></Icon>
                  </View>
                </TouchableOpacity>
              </View>
            </Item>
            <Item rounded style={{marginBottom: 20, borderColor: '#f7931d'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, flex: 1}}
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>To Account*</Text>
                    <Icon name='search' style={{color: '#f7931d'}}></Icon>
                  </View>
                </TouchableOpacity>
              </View>
            </Item>
            <Item rounded style={{paddingHorizontal: 15, marginBottom: 20, borderColor: '#f7931d'}} last>
              <Input placeholder="Amount*" keyboardType="numeric"></Input>
            </Item>
            <View style={{justifyContent: 'space-around', flex: 1, flexDirection: 'row'}}>
              <Button rounded style={{justifyContent: 'center', backgroundColor: '#f15921', width: 160}}>
                  <Text>Workflow List</Text>
              </Button>
              <Button rounded style={{justifyContent: 'center', backgroundColor: '#006884', width: 160}}>
                  <Text>Confirm</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}