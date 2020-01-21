import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, View, Header, Content, Form, Thumbnail, Left, Button, Icon, Body, Title, Right, Item, Label, Input, Text } from 'native-base'
import { Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { languages } from '../helpers/language'
import { styles } from './AccountProfile/style'

class AccountProfileScreen extends Component {
  constructor(props) {
    super(props)
    this._edit = this._edit.bind(this);
    this._save = this._save.bind(this);
    this._handleChoosePhoto = this._handleChoosePhoto.bind(this);
    this.state = {
       isEdit: true,
       userId: 'user1',
       userName: 'user',
       email: 'user1@email.com',
       phone: '081234567890',
       filepath: {
        data: '',
        uri: ''
       },
       fileData: '',
       fileUri: ''
    }
  }
  
  _handleChoosePhoto() {
    // ImagePicker.launchImageLibrary(options, response => {
    //   console.log('response', response);
    //   if (response.uri) {
    //     this.setState({ photo: response });
    //   }
    // });

    const options = {
      title: 'Select Image',
      noData: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  _edit() {
    this.setState({isEdit: false});
  }

  _save() {
    this.setState({isEdit: true});
  }

  render() {
    const { filePath } = this.state;

    const isEdit = this.state.isEdit;
    let button;

    if (!isEdit) {
        button = <Button rounded success style={styles.button} onPress={this._save}><Text>{languages.save}</Text></Button>;
    } else {
        button = <Button rounded info style={styles.button} onPress={this._edit}><Text>{languages.edit}</Text></Button>;
    }

    return (
      <Container>
        <Header style={styles.viewHeader}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={styles.bodyHeader}>
            <Title>{languages.accountProfileHeader}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name='home' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.viewImage}>
            <TouchableOpacity onPress={this._handleChoosePhoto} style={styles.image} disabled={this.state.isEdit}>
              {filePath && (<Thumbnail large rounded source={{uri: filePath.uri}} />)}
            </TouchableOpacity>
          </View>
          <View style={styles.viewInfo}>
            <Form>
                <Item fixedLabel style={styles.inputItem}>
                  <Label>{languages.userIdLabel}</Label>
                  <Input placeholder={languages.inputUserId} onChangeText={(userId) => this.setState({userId})} value={this.state.userId} style={isEdit ? '' : styles.inputEdit} disabled={this.state.isEdit}/>
                </Item>
                <Item fixedLabel style={styles.inputItem}>
                  <Label>{languages.usernameLabel}</Label>
                  <Input placeholder={languages.inputUsername}  onChangeText={(userName) => this.setState({userName})} value={this.state.userName} style={isEdit ? '' : styles.inputEdit} disabled={this.state.isEdit}/>
                </Item>
                <Item fixedLabel style={styles.inputItem}>
                  <Label>{languages.emailLabel}</Label>
                  <Input placeholder={languages.inputEmail}  onChangeText={(email) => this.setState({email})} value={this.state.email} style={isEdit ? '' : styles.inputEdit} disabled={this.state.isEdit}/>
                </Item>
                <Item fixedLabel style={styles.inputItem}>
                  <Label>{languages.phoneLabel}</Label>
                  <Input placeholder={languages.inputPhone}  onChangeText={(phone) => this.setState({phone})} value={this.state.phone} style={isEdit ? '' : styles.inputEdit} disabled={this.state.isEdit}/>
                </Item>
            </Form>
            <View style={styles.viewButton}>
              {button}
              <Button rounded success style={styles.buttonChange} onPress={() => Alert.alert('Alert', 'Comming Soon!')}><Text>{languages.changePassword}</Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AccountProfileScreen