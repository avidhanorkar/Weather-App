/* eslint no-undef: 0 */
import React from 'react'
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'
import IconText from '../components/IconText.js'
const City = () => {
    const {
        city,
        container,
        image,
        Country,
        cityText,
        populationWrapper,
        populationText,
        riseSetWrapper,
        riseSetText,
        rowLayout
    } = styles 
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                style={image}
                source={require('../../assets/city.jpg')}
            >
                <Text style={[city, cityText]}>London</Text>
                <Text style={[Country, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        name={'user'}
                        color={'red'}
                        text={1000}
                        textStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        name={'sunrise'}
                        color={'white'}
                        text={'6:00 AM'}
                        textStyles={riseSetText}
                    />
                    <IconText
                        name={'sunset'}
                        color={'white'}
                        text={'18:00 PM'}
                        textStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    city: {
        fontSize: 40
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        objectFit: 'cover'
    },
    Country: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City
