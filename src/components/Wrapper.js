import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const Wrapper = ({ editTitle, editContent, navigation, screen, name,callback }) => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')


    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.txt}>Enter {editTitle} Title:</Text>
                <TextInput 
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.textInput} 
                />
            </View>
            <View>
                <Text style={styles.txt}>Enter {editContent} Content:</Text>
                <TextInput 
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.textInput} />
            </View> 

            <Button style={styles.btn} onPress={() => callback(title,content)} title={name} />
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
