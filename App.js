import React, { useState, useEffect } from 'react'
import Tab from './src/components/Tabs.js'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useGetWeather } from './src/hooks/useGetWeather.js'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  if (weather && weather.list){
    return (
      <NavigationContainer>
        <Tab weather={weather}/>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
