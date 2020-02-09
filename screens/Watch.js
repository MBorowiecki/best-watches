import React, { useEffect } from 'react';
import { View, Text, ImageBackground, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const WatchImage = styled.ImageBackground`
    flex: 3;
    resize-mode: cover;
`

const Content = styled.View`
    flex: 2;
    padding: 30px;
    display: flex;
`

const WatchName = styled.Text`
    color: #020102;
    font-size: 24px;
    margin-bottom: 12px;
`

const WatchPrice = styled.Text`
    font-size: 20px;
    color: #020102;
    margin-bottom: 16px;
`

const WatchDescription = styled.Text`
    font-size: 16px;
    color: #020102;
    flex-grow: 1;
`

const BottomContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const BuyButton = styled.View`
    padding: 20px;
    background-color: #D5A587;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`

const BuyText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
`

const BackIcon = styled(Icon)`
    margin-top: 40px;
    margin-left: 20px;
`

const Watch = ({route, navigation}) => {
    const watchObject = route.params.watch;

    return(
        <Container>
            <WatchImage 
                source={{uri: watchObject.imgUrl}}
            >
                <TouchableNativeFeedback
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon name="angle-left" size={40} color="#000000" />
                </TouchableNativeFeedback>
            </WatchImage>
            <Content>
                <WatchName>
                    {watchObject.name}
                </WatchName>
                <WatchPrice>
                    ${watchObject.price}
                </WatchPrice>
                <WatchDescription>
                    {watchObject.description}
                </WatchDescription>
                <BottomContainer>
                    <TouchableNativeFeedback>
                        <BuyButton>
                            <BuyText>
                                BUY NOW
                            </BuyText>
                        </BuyButton>
                    </TouchableNativeFeedback>
                </BottomContainer>
            </Content>
        </Container>
    )
}

export default Watch;