import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header =({iconName, navigation, screen}) => {
    return (
        <View style={styles.header}>
            <View></View>
            <Text style={styles.txt}>Blog List</Text>
            <TouchableOpacity onPress={()=>navigation.navigate(screen)}>
            <AntDesign name={iconName} size={40}/>
            </TouchableOpacity>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#dfe6e9",
        flexDirection:"row",
        fontWeight:"bold",
        justifyContent:'space-between',
    },
    txt:{
        fontSize:30,
        fontWeight:"bold",
    },
})
