import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
const CreateScreen = ({ navigation }) => {
    return (

        <View>
            <Header />
            <Wrapper navigation={navigation} screen='Index' name="Save"/>
        </View>
    )
}

export default CreateScreen;
