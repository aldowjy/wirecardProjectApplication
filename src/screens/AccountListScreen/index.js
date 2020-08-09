import React, { Component } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { View, Left, Right, Icon, Body, List, ListItem, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import WContainer from '../../components/presentations/WContainer';
import styles from '../HomeScreen/style';
import { styles as localStyles } from './style';
import { languages } from '../../helpers/language';
import Loader from '../../components/Loader';
import { loadAccountList, loadMoreAccount } from "../../redux/actions/accountListAction";

class AccountListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
       current_page: 1,
    }
  }
  
  componentDidMount() {
    const { fetchActionCreator } = this.props;
    console.log("List of Account: ", this.props.accountList)
    fetchActionCreator();
  }

  _navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.navigate(navigateAction);
  }

  async _handleGetDetail(data) {
    return fetch('http://localhost:3000/users/' + data)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        accountDetail: responseJson
      })
      this.props.navigation.navigate('AccountDetailScreen', { detail: this.state.accountDetail })
    })
  }

  _handleScroll = (event) => {
    const { loadMoreActionCreator, totalPages } = this.props;
    if (event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - 50 && this.state.current_page < totalPages) {
      this.setState({
        current_page: this.state.current_page + 1,
      }, () => loadMoreActionCreator(this.state.current_page));
    }
  };

  _getInitials = (string) => {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  _renderList = (id, email, first_name, last_name) => {
    const full_name = first_name + ' ' + last_name
    return (
      <TouchableOpacity key={id}>
        <List>
          <ListItem style={{marginBottom: 30}}>
            <Left>
              <View style={localStyles.cardImage}>
                  <Text style={localStyles.cardInitial}>{this._getInitials(full_name)}</Text>
              </View>
              <Body>
                <Text>{full_name}</Text>
                <Text note>{email}</Text>
              </Body>
            </Left>
            <Right>
              <Icon name='md-arrow-dropright' style={styles.iconList}/>
            </Right>
          </ListItem>
        </List>
      </TouchableOpacity>
    )}

  render() {
    const { isLoading, error, accountList, navigation } = this.props;
    if (isLoading) return <Loader />
    if (error) return <Text>Error</Text>

    return (
      <WContainer navigation={navigation} leftIcon='arrow-back' rightIcon='home' title={languages.accountListHeader} onClickLeft={() => this.props.navigation.goBack()} onClickRight={() => this.props.navigation.navigate('HomeScreen')}>
        <Grid style={{marginTop: 50}}>
          <Col style={{marginHorizontal: 30}}>
            <Row style={styles.titleRecent}>
              <Text>List of Account</Text>
            </Row>
            <Row style={styles.bodyRecent}>
              <ScrollView onScroll={this._handleScroll}>
                {accountList.map(account => {
                  const { id, email, first_name, last_name } = account;
                  return (
                    <Col key={id}>
                      {this._renderList(id, email, first_name, last_name)}
                    </Col>
                  );
                })}
              </ScrollView>
            </Row>
          </Col>
        </Grid>
      </WContainer>
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

const mapDispateToProps = (dispatch) => {
  return {
    fetchActionCreator: () => dispatch(loadAccountList()),
    loadMoreActionCreator: (current_page) => dispatch(loadMoreAccount(current_page))
  }
}

export default connect(mapStateToProps, mapDispateToProps)(AccountListScreen);