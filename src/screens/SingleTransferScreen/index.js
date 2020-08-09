import React, { Component } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Content, View, Form, Item, Input, Text, Button, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import OwnAccountList from '../../components/OwnAccountList';
import { languages } from '../../helpers/language';
import { styles } from './style'
import WContainer from '../../components/presentations/WContainer';
import WButton from '../../components/WButton';

export default class SingleTransferScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: true,
        user: [],
        modalVisible: false,
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
    return fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          user: responseJson
        })
      })
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handlerCheck = (data) => {
    this.setState({name: data});
    this.setModalVisible(false);
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.state;

    return (
      <WContainer navigation={navigation} leftIcon='arrow-back' rightIcon='home' title={languages.singleTransfer} onClickLeft={() => navigation.goBack()} onClickRight={() => navigation.navigate('HomeScreen')}>
        <Grid>
          <Col style={{marginHorizontal: 30, marginTop: 30}}>
            <Row style={styles.titleForm}>
              <Text>{languages.recentActivityLabel}</Text>
            </Row>
            <Row style={styles.bodyForm}>
              <Content>
                <Form style={{margin: 20}}>
                  <Item rounded style={{marginBottom: 20, borderColor: '#f7931d'}}>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20, flex: 1}}
                        onPress={() => { this.setModalVisible(true); }}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                          <Text>{this.state.name}</Text>
                          <Icon name='search' style={{color: '#f7931d'}}></Icon>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Item>
                  <Item rounded style={{paddingHorizontal: 15, marginBottom: 20, borderColor: '#f7931d'}} last>
                    <Input placeholder="Amount*" keyboardType="numeric"></Input>
                  </Item>
                </Form>
              </Content>
            </Row>
            <Row style={styles.buttonView}>
              <WButton style={styles.buttonGeneral} text={languages.buttonWorkflow}/>
              <WButton style={styles.buttonConfirm} text={languages.buttonConfirm}/>
            </Row>
            <Col>
              <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                <View style={{flex: 1}}>
                  <View style ={{flex:1, justifyContent: 'flex-end'}}>
                    <View style={styles.viewModalBody}>
                      <Text style={{color: '#ffffff', fontWeight: 'bold'}}>{languages.fromAccount}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Icon name='close' style={{color: '#ffffff'}}></Icon>
                      </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: '#ffffff', height: 300}}>
                      <Content>
                      {
                        user.map(user => {
                          return <OwnAccountList key={user.id} number={user.accountNumber} name={user.username} currency={user.infoAccount.currency} id={user.id} check={this.handlerCheck}/>
                        })
                      }
                      </Content>
                    </View>
                  </View>
                </View>
              </Modal>
            </Col>
          </Col>
        </Grid>
      </WContainer>
    );
  }
}