import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';

import Header from '../components/Header';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #ffffff;
`

const SignInAnonymous = async () => {
    await firebase.auth().signInAnonymously().catch(err => {
        if(err){
            console.log(err);
            return false;
        }else{
            return true;
        }
    })
}

const Profile = ({ navigation }) => {
    const [logged, setLogged] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        if(firebase.apps.length <= 0){
            let app = firebase.initializeApp(firebaseConfig);
        }
    }, [])

    useEffect(() => {
        const GetProfile = async () => {
            try{
                let profileStorage = await AsyncStorage.getItem("profile");

                if(profileStorage){
                    setProfile(JSON.parse(profileStorage))
                    setLogged(true);
                }
            } catch(err){
                console.log(err);
                setLogged(false);
            }
        }

        GetProfile();
    }, [])

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                setProfile(user);
            }

            console.log(user);
        })
    }, [logged])

    return(
        <Container>
            <Header title="My Profile" navigation={navigation} />
            <Button title="Sign In" onPress={() => {
                setLogged(SignInAnonymous());
            }} />
            <Text>
                {profile.uid}
            </Text>
        </Container>
    )
}

export default Profile;