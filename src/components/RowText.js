import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RowText = (props) => {
    const { msg1, msg2, wrapperStyle, textStyle1, textStyle2} = props
    return (
        <View style={wrapperStyle}>
            <Text style={textStyle1}>{msg1}</Text>
            <Text style={textStyle2}>{msg2}</Text>
        </View>
    )
}


export default RowText
