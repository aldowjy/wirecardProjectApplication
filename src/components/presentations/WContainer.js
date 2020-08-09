import React, { Component } from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Title, Icon, Right, Button,} from 'native-base';
import commons from '../../themes/commons';
import { image } from '../../helpers/image';

export default class WContainer extends Component {
    render () {
        const {leftIcon, onClickLeft, onClickRight, rightIcon, title} = this.props;
        return (
            <Container>
                <ImageBackground source={image.background_bni} style={{flex: 1}}>
                    <Header style={commons.navbar}>
                        <StatusBar backgroundColor="#f7931d" barStyle="light-content" />
                        <Left>
                            <Button transparent onPress={onClickLeft}>
                                <Icon name={leftIcon} />
                            </Button>
                        </Left>
                        <Body>
                            <Title>{title}</Title>
                        </Body>
                        <Right>
                            <Button transparent onPress={onClickRight}>
                                <Icon name={rightIcon} />
                            </Button>
                        </Right>
                    </Header>
                    {this.props.children}
                </ImageBackground>
            </Container>
        );
    }
}
