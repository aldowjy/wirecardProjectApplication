import React, { Component } from 'react'
import { Container, Header, View, Left, Button, Icon, Body, Title, Right, Card, CardItem, Text } from 'native-base'
import { TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './style'
import { languages } from '../../helpers/language'

export default class AccountListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       accountList: [],
       accountDetail: [],
       loading: false,
       current_page: 1,
       error: null,
       hasMore: true
    }
  }

  _getAccountList() {
    if (this.state.loading) { return; }
    const current = this.state.current_page;
    console.log("CURRENT", current)
    return fetch('https://reqres.in/api/users?page='+current)
      .then((response) => response.json())
      .then((response) => {
        const nextAccount = response.data.map(data => ({
          id: data.id,
          email: data.email,
          name: data.first_name,
          avatar: data.avatar
        }));
        this.setState({
          hasMore: (response.page < response.total_pages),
          accountList: [...this.state.accountList, ...nextAccount],
          loading: false,
          current_page: this.state.current_page + 1
        })
      })
      .catch(error => {this.setState({error, loading: false})})
  }

  _handleGetDetail(data) {
    return fetch('http://127.0.0.1:3000/users' + data)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        accountDetail: responseJson
      })
      this.props.navigation.navigate('AccountDetailScreen', { detail: this.state.accountDetail })
    })
  }

  _renderList() {
    var _getInitials = function(string) {
      var names = string.split(' '),
          initials = names[0].substring(0, 1).toUpperCase();
      if (names.length > 1) {
          initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    };
    return ( this.state.accountList.map((data) => {
      return ( 
        <TouchableOpacity key={data.id}>
              <Card style={{padding: 50}}>
                <CardItem>
                  <Left>
                    <View style={styles.cardImage}>
                        <Text style={styles.cardInitial}>{data.id}</Text>
                    </View>
                    <Body>
                      <Text note>{data.email}</Text>
                      <Text>{data.name}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
         </TouchableOpacity>);})
   );
  }

  _isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 50;
  }
  
  componentWillMount() {
    this._getAccountList();
  }

  render() {

    return (
      <Container>
        <Header style={styles.viewNavbar}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={styles.bodyNavbar}>
            <Title>{languages.accountListHeader}</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name='home' />
            </Button>
          </Right>
        </Header>
        {/* <ScrollView>
          {
            this.state.accountList.map(post => {
              return <TouchableOpacity key={post.id} style={styles.card} onPress={() => this._handleGetDetail(post.id)}>
                        <Card>
                          <CardItem>
                            <Left>
                              <View style={styles.cardImage}>
                                  <Text style={styles.cardInitial}>{getInitials(post.name)}</Text>
                              </View>
                              <Body>
                                <Text>{post.name}</Text>
                                <Text note>{post.email}</Text>
                                <Text>{post.phone}</Text>
                              </Body>
                            </Left>
                          </CardItem>
                        </Card>
                      </TouchableOpacity>
            })
          }
        </ScrollView> */}
        <ScrollView onScroll={({ nativeEvent }) => {
          if (this._isCloseToBottom(nativeEvent) && this.state.hasMore) {                
              this._getAccountList();
          }}}> 
          {this._renderList()} 
        </ScrollView>
      </Container>
    );
  }
}
