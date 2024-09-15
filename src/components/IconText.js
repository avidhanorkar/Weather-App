import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
const IconText = (props) => {
    const { name, color, text, textStyles } = props
    const { textTheme, container } = styles
    return(
        <View style={container}>
        <Feather name={name} size={50} color={color} />
        <Text style = {[textTheme, textStyles]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold'
    }, 
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
}) 

export default IconText;