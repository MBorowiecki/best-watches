import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const HeaderContainer = styled.View`
    padding: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Hamburger = styled.Image`

` 

const HeaderTitle = styled.Text`
    flex-grow: 1;
    font-size: 17px;
    color: #020102;
    text-align: center;
`

const SearchIcon = styled.Image`
    opacity: 0;
`

const Header = (props) => {
    return(
        <HeaderContainer>
            <TouchableWithoutFeedback
                onPress={() => {
                    props.navigation.openDrawer();
                }}
            >
                {/*<Hamburger source={require("../../assets/hamburger.png")} />*/}
                <MaterialIcon name="menu" size={25} />
            </TouchableWithoutFeedback>
            <HeaderTitle>{props.title}</HeaderTitle>
            <SearchIcon source={require("../../assets/search.png")} />
        </HeaderContainer>
    )
}

export default Header;