import React, { Component } from 'react'
import { Container, Header, View, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';
import { styles } from './style'
import { languages } from '../../helpers/language';

export default class AccountDetailScreen extends Component {
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
                    <Title>{languages.accountDetailHeader}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('HomeScreen')}>
                    <Icon name='home' />
                    </Button>
                </Right>
                </Header>
                <View style={styles.viewCard}>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.nameLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.name}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.usernameLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.username}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.emailLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.email}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.addressLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.address.street}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.phoneLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.phone}</Text>
                    </View>
                    <View style={styles.viewRow}>
                        <Text style={styles.viewLabel}>{languages.companyLabel}</Text>
                        <Text>: {this.props.navigation.state.params.detail.company.name}</Text>
                    </View>
                </View>
                <View style={styles.viewButton}>
                    <Button rounded primary style={styles.button} onPress={() => this.props.navigation.goBack()}><Text>{languages.ok}</Text></Button>
                </View>
            </Container>
        )
    }
}
