import React from 'react';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

const DiscoverContainer = styled.View`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-height: 50%;
`

const DiscoverLabel = styled.Text`
    font-size: 24px;
    font-weight: 600;
    width: 100%;
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 30px;
`

const DiscoverItemContainer = styled.View`
    padding-bottom: 24px;
    padding: 8px;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    width: 100%;
`

const DiscoverItemImg = styled.Image`
    flex: 1;
    height: 100%;
    resize-mode: cover;
`
const DiscoverItemMiddle = styled.View`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DiscoverItemName = styled.Text`
    flex: 1;
    font-size: 22px;
    color: #000000;
    margin-bottom: 4px;
`

const DiscoverItemInfo = styled.Text`
    flex: 1;
    font-size: 14px;
    color: #4D4D4D;
`

const DiscoverItemPrice = styled.Text`
    color: #020102;
    font-size: 20px;
    margin-right: 20px;
    flex: 1;
`

export default Discover = ({ slides, navigation }) => {
    return(
        <DiscoverContainer>
            <DiscoverLabel>
                Discover
            </DiscoverLabel>
            <ScrollView style={{width: "100%", paddingLeft: 30, paddingRight: 30, marginTop: 24}}>
                {slides.map( (watch, index) => {
                    return(
                        <TouchableWithoutFeedback
                            onPress={() => {
                                navigation.navigate("Watch", {watch: watch})
                            }}
                            key={index}
                        >
                        <DiscoverItemContainer>
                            <DiscoverItemImg source={{uri: watch.smallImgUrl}} />  
                            <DiscoverItemMiddle>
                                <DiscoverItemName>
                                    {watch.name}
                                </DiscoverItemName>
                                <DiscoverItemInfo>
                                    {watch.color}, size {watch.size}    
                                </DiscoverItemInfo> 
                            </DiscoverItemMiddle>  
                            <DiscoverItemPrice>
                                ${watch.price}    
                            </DiscoverItemPrice>   
                        </DiscoverItemContainer>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </DiscoverContainer>
    )
}