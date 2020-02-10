import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../components/Header';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
`

const ItemContainer = styled.View`
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

const ItemImg = styled.Image`
    flex: 2;
    height: 100%;
    resize-mode: cover;
`
const ItemMiddle = styled.View`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ItemName = styled.Text`
    flex: 1;
    font-size: 22px;
    color: #000000;
    margin-bottom: 4px;
`

const ItemInfo = styled.Text`
    flex: 1;
    font-size: 14px;
    color: #4D4D4D;
`

const ItemPrice = styled.Text`
    color: #020102;
    font-size: 20px;
    margin-right: 20px;
    flex: 1;
`

const RemoveIcon = styled(Icon)`
    color: #525252;
`

const CheckoutContainer = styled.View`
    padding: 20px;
    background-color: #D5A587;
    justify-content: center;
    align-items: center;
    margin: 30px;
    margin-top: 10px;
`

const CheckoutText = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
`

const Cart = ({ navigation }) => {
    const [checkoutPrice, setCheckoutPrice] = useState(0);
    const watches = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        let price = 0;

        watches.map((watch) => {
            price += watch.price
        })

        setCheckoutPrice(price);
    }, [watches])

    const removeWatch = index => {dispatch({
        type: "REMOVE_WATCH",
        index: index
    })}

    return(
        <Container>
            <Header title="My Cart" navigation={navigation} />
            <ScrollView style={{padding: 30, paddingTop: 0}}>
                {watches.map((watch, index) => {
                    return(
                        <ItemContainer>
                            <ItemImg source={{uri: watch.smallImgUrl}} />  
                            <ItemMiddle>
                                <ItemName>
                                    {watch.name}
                                </ItemName>
                                <ItemInfo>
                                    {watch.color}, size {watch.size}    
                                </ItemInfo> 
                            </ItemMiddle>  
                            <TouchableNativeFeedback
                                    onPress={() => {
                                        removeWatch(index)
                                    }}
                                >
                            <ItemPrice>
                                    <RemoveIcon
                                        name="delete"
                                        size={30}
                                    />    
                            </ItemPrice>   
                            </TouchableNativeFeedback>
                        </ItemContainer>
                    )
                })}
            </ScrollView>

            <TouchableNativeFeedback
                onPress={() => {
                    console.log("Checkout sum: " + checkoutPrice + "$");
                }}
            >
                <CheckoutContainer>
                    <CheckoutText>
                        Checkout
                    </CheckoutText>
                </CheckoutContainer>
            </TouchableNativeFeedback>
        </Container>
    )
}

export default Cart;