/* eslint no-undef: 0 */
import React from 'react'
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    FlatList, 
    StatusBar
} from 'react-native'
import ListItem from '../components/ListItem'

const Data = [
    {
        dt_txt: '2023-02-17 12:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2023-02-17 15:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: '2023-02-17 18:00:00',
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]



const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                style={image}
                source={require('../../assets/Clouds.jpg')}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={Data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1,
    }
})

const { container, image } = styles

export default UpcomingWeather
