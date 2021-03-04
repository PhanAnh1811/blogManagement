import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import RenderItems from '../components/RenderItems'

const IndexScreen = ({ navigation }) => {
    return (
        <View>
            <Header iconName='plus' navigation={navigation} screenName='Create'/>
            <RenderItems navigation={navigation} />
        </View>
    )
}

export default IndexScreen;