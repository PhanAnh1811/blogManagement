import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Wrapper = ({ editTitle, editContent, navigation, screen, name }) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.txt}>Enter {editTitle} Title:</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View>
                <Text style={styles.txt}>Enter {editContent} Content:</Text>
                <TextInput style={styles.textInput} />
            </View>

            <Button style={styles.btn} onPress={() => navigation.navigate(screen)} title={name} />
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        width: 380,
        height: 50,
    },
    btn: {
        width: 400,
        height: 200,
    },
    wrapper: {
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:20,


    },
    txt:{
        fontSize:20,
        fontWeight:"bold",
    }
})
