import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import Header from '../components/Header'

const ShowScreen = ({navigation}) => {
    return (
        <Header iconName='edit' navigation={navigation} screen='Edit'/>
    )
}

export default ShowScreen;