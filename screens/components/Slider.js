import React from 'react';
import { View, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

const SliderContainer = styled.ScrollView`
    flex-grow: 1;
    padding-left: 30px;
`

const SliderCard = styled.ImageBackground`
    width: 300px;
    margin-right: 30px;
`

const SliderContent = styled.View`
    display: flex;
    padding: 16px;
`

const SliderTitle = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: #FFFFFF;
`

const SliderPrice = styled.Text`
    font-size: 20px;
    font-weight: 200;
    color: #FFFFFF;
`

const Slider = ({navigation, slides}) => {
    return(
        <SliderContainer 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {slides.map( (slide, index) => {
                    return(
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate("Watch", {watch: slide})}
                            key={index}
                        >
                            <SliderCard
                                source={{uri: slide.imgUrl}}
                            >
                                <SliderContent>
                                    <SliderTitle>
                                        {slide.name}
                                    </SliderTitle>
                                    <SliderPrice>
                                        ${slide.price}
                                    </SliderPrice>
                                </SliderContent>
                            </SliderCard>
                        </TouchableWithoutFeedback>
                    )
                })}
            </SliderContainer>
    )
}

export default Slider;