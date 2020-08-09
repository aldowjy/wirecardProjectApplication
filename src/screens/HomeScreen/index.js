import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Icon, Right, Content, Text, List, ListItem, Body, Badge} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationActions } from 'react-navigation';
import WContainer from '../../components/presentations/WContainer';
import styles from './style';
import { languages } from '../../helpers/language';

export default class HomeScreen extends Component {
  _navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
    this.props.navigation.navigate(navigateAction);
  }

  _handleSideClick = () => {
      const { navigation } = this.props;
      console.log("LAH: ", navigation);
      navigation.toggleDrawer();
  }

  _handleItemDetailClick = () => {
    Alert.alert("I am clicked");
  }

  render() {
    const { navigation } = this.props;
    return (
      <WContainer navigation={navigation} leftIcon='menu' rightIcon='refresh' onClickLeft={this._handleSideClick} onClickRight={() => navigation.navigate('LoginScreen')}>
        <Grid>
          <Row style={styles.containerStatus} size={5}>
            <Row style={styles.viewStatus} size={60}>
              <Icon name='md-archive' style={styles.iconColor}/>
              <Text style={styles.textStatus}>{languages.pendingTaskLabel}</Text>
              <Badge style={styles.badgeColor}>
                <Text>2</Text>
              </Badge>
            </Row>
            <Row style={styles.viewStatus} size={40}>
              <Icon name='md-alert' style={styles.iconColor}/>
              <Text style={styles.textStatus}>{languages.inboxLabel}</Text>
              <Badge style={styles.badgeColor}>
                <Text>0</Text>
              </Badge>
            </Row>
          </Row>
          <Col style={styles.containerRecent} size={95}>
            <Row style={styles.titleRecent}>
              <Text>{languages.recentActivityLabel}</Text>
            </Row>
            <Row style={styles.bodyRecent}>
              <Content>
                <List>
                  <ListItem button onPress={this._handleItemDetailClick}>
                    <Body>
                      <Text style={styles.textList}>Domestic Transfer</Text>
                      <Text note>Pending Approval</Text>
                      <Text note>30-01-2020, 22:17</Text>
                      <Text note>Activity by Jenomaker</Text>
                    </Body>
                    <Right>
                      <Icon name='md-arrow-dropright' style={styles.iconList}/>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </Row>
          </Col>
        </Grid>
      </WContainer>
    );
  }
}