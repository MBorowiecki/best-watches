import React, { useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, ImageBackground, StatusBar } from 'react-native';
import styled from 'styled-components';
import { slides, discoverWatches } from '../data/watches';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Header from './components/Header';
import Slider from './components/Slider';
import Discover from './components/Discover';
import Cart from './homeScreens/Cart';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
`

const HomeDrawer = createDrawerNavigator();

const HomeContent = ({navigation}) => {

    return(
        <Container>
            <StatusBar barStyle="dark-content" />
            <Header title="Watches" navigation={navigation} />
            <Slider slides={slides} navigation={navigation} />
            <Discover slides={discoverWatches} navigation={navigation} />
        </Container>
    )
}

const Home = ({ navigation }) => {
    return(
        <HomeDrawer.Navigator>
            <HomeDrawer.Screen name="Home" component={HomeContent} /> 
            <HomeDrawer.Screen name="My Cart" component={Cart} />
        </HomeDrawer.Navigator>
    )
}

export default Home;