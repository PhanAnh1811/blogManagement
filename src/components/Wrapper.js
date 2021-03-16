import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Wrapper = ({ captionTitle,captionContent, 
    title,setTitle,content,setContent,
    name,callback }) => {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.label}>{captionTitle}</Text>
                <TextInput 
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.textInput} 
                />
            </View>
            <View>
                <Text style={styles.label}>{captionContent}</Text>
                <TextInput 
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.textInput} />
            </View> 

            <Button style={styles.btn} onPress={callback} title={name} />
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
    label:{
        fontSize:20,
        fontWeight:"bold",
    }
})
