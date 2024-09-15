import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import RowText from '../components/RowText.js'

const CurrentWeather = () => {
    return (
        <SafeAreaView style={wrapper}>
            <StatusBar barStyle={'light-content'} />
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels Like 5</Text>
                <RowText
                    msg1={'High: 8'}
                    msg2={'Low: 6'}
                    wrapperStyle={highLowWrapper}
                    textStyle1={highLow}
                    textStyle2={highLow}
                />
            </View>
            <RowText
                msg1={'Its Sunny'}
                msg2={'Its a perfect t-shirt weather'}
                wrapperStyle={bodyWrapper}
                textStyle1={description}
                textStyle2={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLow: {
        fontSize: 20,
        color: 'black'
    },
    highLowWrapper: {
        flexDirection: 'row',
        gap: 10
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        backgroundColor: 'pink',
        paddingBottom: 40
    },
    description: {
        fontSize: 48,
        textAlign: 'center'
    },
    message: {
        fontSize: 28,
        textAlign: 'center'
    }
})

const {
    container,
    wrapper,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message
} = styles
export default CurrentWeather
