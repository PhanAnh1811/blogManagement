import React,{useContext} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import BlogContext from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

    const blogCnt=useContext(BlogContext);
    const {editBlogPost}=blogCnt;


    return (
        <View>
            <Header navigation={navigation} screen='Index' iconName='close'/>
            <Wrapper editTitle="New" editContent="New" 
            callback={(title,content)=>{
                addBlogPost(title,content)
                navigation.navigate('Show')
            }}
            navigation={navigation} screen='Show' name="Save" />
        </View>
    )
}

export default CreateScreen