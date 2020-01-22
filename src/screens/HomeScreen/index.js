import React, { Component } from 'react'
import { BackHandler, Alert } from 'react-native'
import { Container, Header, Left, Icon, Right, Content, Text, Button, Grid, Row} from 'native-base'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { styles } from './style'
import { languages } from '../../helpers/language'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this._navigateToScreen = this._navigateToScreen.bind(this);
    this._handleHomeClick = this._handleHomeClick.bind(this);
    this._handleSideClick = this._handleSideClick.bind(this);
    this._handleBackButtonPressAndroid = this._handleBackButtonPressAndroid.bind(this);
    this.state = {
        lastLogin: ''
    };
  }

  _navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.navigate(navigateAction);
  }

  _handleHomeClick() {
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButtonPressAndroid);
    this._navigateToScreen("LoginScreen")
  }

  _handleSideClick() {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  }

  _handleBackButtonPressAndroid() {
    Alert.alert(
      'Exit',
      'Are you sure you want to exit?',
      [
        { text: 'Cancel', onPress: () => {} },
        { text: 'Yes', onPress: () => {BackHandler.exitApp()}},
      ], {
        cancelable: false
      }
    );
    return true;
  };

  _getDate() {
    var mnth = new Array();
        mnth[0] = "JAN";
        mnth[1] = "FEB";
        mnth[2] = "MAR";
        mnth[3] = "APR";
        mnth[4] = "MAY";
        mnth[5] = "JUN";
        mnth[6] = "JUL";
        mnth[7] = "AUG";
        mnth[8] = "SEP";
        mnth[9] = "OCT";
        mnth[10] = "NOV";
        mnth[11] = "DEC";
    var that = this;
    var date = new Date().getDate();
    var month = mnth[new Date().getMonth()];
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    that.setState({
      lastLogin: date + ' ' + month + ' ' + year + ' - ' + hours + ':' + min + ':' + sec,
    });
  }

  componentDidMount() {
    this._getDate()
    BackHandler.addEventListener('hardwareBackPress',this._handleBackButtonPressAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButtonPressAndroid);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.viewNavbar}>
          <Left>
            <Button transparent onPress={this._handleSideClick}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={this._handleHomeClick}>
              <Icon name='exit' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.viewContent}>
          <Grid style={styles.viewContentHeader}>
            <Row><Text style={styles.viewContentHeader1}>{languages.title}</Text></Row>
            <Row><Text style={styles.viewContentHeader2}>{languages.description}</Text></Row>
            <Row><Text style={styles.viewContentHeader3}>{languages.lastLogin} {this.state.lastLogin}</Text></Row>
            <Row><Text style={styles.viewContentHeader4}>{languages.welcoming}{this.props.userId} {languages.from} {this.props.companyId}</Text></Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyId: state.userState.company.companyId,
    userId: state.userState.userId
  }
}

export default connect(mapStateToProps)(HomeScreen)