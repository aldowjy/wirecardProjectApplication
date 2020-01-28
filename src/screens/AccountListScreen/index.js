import React, { Component } from 'react';
import { Container, Header, View, Left, Button, Icon, Body, Title, Right, Card, CardItem, Text } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style';
import { languages } from '../../helpers/language';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { loadAccountList, loadMoreAccount } from "../../redux/actions/accountListAction";
class AccountListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       accountList: [],
       accountDetail: [],
       loading: false,
       current_page: 1,
       error: null,
       hasMore: true,
    }
  }

  _getAccountList() {
    if (this.state.loading) { return; }
    const current = this.state.current_page;
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
    return fetch('http://102.27.1.1:3000/' + data)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        accountDetail: responseJson
      })
      this.props.navigation.navigate('AccountDetailScreen', { detail: this.state.accountDetail })
    })
  }

  _renderList() {
    return ( this.props.accountList.map((data) => {
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
  
  // componentWillMount() {
  //   this._getAccountList();
  // }

  componentDidMount() {
    const { fetchActionCreator } = this.props;
    console.log("List of Account: ", this.props.accountList)
    fetchActionCreator();
  }

  handleScroll = (event) => {
    const { loadMoreActionCreator, totalPages } = this.props;
    if (event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - 50 && this.state.current_page < totalPages) {
      this.setState({
        current_page: this.state.current_page + 1,
      }, () => loadMoreActionCreator(this.state.current_page));
    }
  };

  AccountListItem = (id, email, first_name) => {
    return (
      <TouchableOpacity key={id}>
          <Card style={{padding: 50}}>
            <CardItem>
              <Left>
                <View style={styles.cardImage}>
                    <Text style={styles.cardInitial}>{id}</Text>
                </View>
                <Body>
                  <Text note>{email}</Text>
                  <Text>{first_name}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
    </TouchableOpacity>)}

  render() {
    const { isLoading, error, accountList } = this.props;
    if (isLoading) return <Loader />
    if (error) return <Text>Error</Text>

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
        {/* <ScrollView onScroll={({ nativeEvent }) => {
          if (this._isCloseToBottom(nativeEvent) && this.state.hasMore) {      
              console.log(nativeEvent);          
              this._getAccountList();
          }}}> 
          {this._renderList()} 
        </ScrollView> */}
        <ScrollView onScroll={this.handleScroll}>
          {accountList.map(account => {
            const { id, email, first_name } = account;
            return (
              <View key={id}>
                {this.AccountListItem(id, email, first_name)}
              </View>
            );
          })}
        </ScrollView>
        {isLoading && (
          <View>
            <View>
              <Text>Loading...</Text>
            </View>
          </View>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.accountListState.isLoading,
  error: state.accountListState.error,
  accountList: state.accountListState.accountList,
  currentPage: state.accountListState.currentPage,
  totalPages: state.accountListState.totalPages
});

// const mapDispatchToProps = (dispatch) => {
//   const { current_page } = this.state
//   return bindActionCreators({fetchActionCreator: loadAccountList, loadMoreActionCreator: loadMoreAccount(current_page)}, dispatch);
// };

const mapDispateToProps = (dispatch) => {
  return {
    fetchActionCreator: () => dispatch(loadAccountList()),
    loadMoreActionCreator: (current_page) => dispatch(loadMoreAccount(current_page))
  }
}

export default connect(mapStateToProps, mapDispateToProps)(AccountListScreen);