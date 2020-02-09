import React, { useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { slides, discoverWatches } from '../data/watches';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

import Header from './components/Header';
import Slider from './components/Slider';
import Discover from './components/Discover';
import Profile from './homeScreens/Profile';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
`

const HomeDrawer = createDrawerNavigator();

const HomeContent = ({navigation}) => {

    useEffect(() => {
        if(firebase.apps.length <= 0){
            let app = firebase.initializeApp(firebaseConfig);
        }
    }, [])

    return(
        <Container>
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
            <HomeDrawer.Screen name="My Profile" component={Profile} />
        </HomeDrawer.Navigator>
    )
}

export default Home;