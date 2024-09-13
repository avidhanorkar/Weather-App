import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

const CurrentWeather = () => {
  return(
    <SafeAreaView style = {styles.wrapper}>
      <StatusBar barStyle={"light-content"} />
      <View style ={styles.container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style = {styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>Its a perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
   {
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
      fontSize: 48,
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
      textAlign: 'center',
    }, 
    message: {
      fontSize: 28,
      textAlign: 'center',
    }
   }
)
export default CurrentWeather