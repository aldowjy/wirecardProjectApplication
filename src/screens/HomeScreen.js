import React, { Component } from 'react';
import { Container, Header, Left, Icon, Right, Content, Text, Button, Grid, Row} from 'native-base';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lastLogin: '',
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#0D1322'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='exit' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid style={{backgroundColor: '#0D1322', height: 200, padding: 20, borderBottomRightRadius: 100}}>
            <Row><Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>NativePrism</Text></Row>
            <Row><Text style={{color: '#ffffff', fontSize: 20, marginTop: -12}}>Wirecard Technology Indonesia</Text></Row>
            <Row><Text style={{color: '#ffffff', fontSize: 14, alignSelf: 'center'}}>Last Login: {this.state.lastLogin}</Text></Row>
            <Row><Text style={{color: '#ffffff', fontSize: 14, alignSelf: 'center'}}>Welcome, {this.props.userId} from {this.props.companyId}</Text></Row>
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