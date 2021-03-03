import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import Header from '../components/Header'

const ShowScreen = ({navigation,route}) => {
    const detail = route.params.item
    console.log(route);
    return (
        <View>
            <Header iconName='edit' navigation={navigation} screen='Edit'/>
            <View style={Styles.wrapper}>
                <Text></Text>
            </View>
        </View>
        
    )
}

const Styles=StyleSheet.create({
    wrapper:{
        borderWidth:1,
        borderColor:'black',
        margin:50,
        width:350,
        height:200,
        alignSelf:'center',
    },
})
export default ShowScreen;