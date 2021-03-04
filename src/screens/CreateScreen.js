import React,{useContext, useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

import BlogContext from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
    const blogCtx = useContext(BlogContext);
     
    const {addBlogPost} = blogCtx;

    const [title,setTitle]  = useState('');
    const [content,setContent] = useState('');


    return (
        <View>
            <Header navigation={navigation} screen='Index' iconName='close'/>
            <Wrapper 
                captionTitle='Enter Title'
                captionContent='Enter Content'
                title={title}
                setTitle={setTitle}
                content={content}
                setContent={setContent}
                callback={() => {
                    addBlogPost(title,content)
                    navigation.navigate('Index')
                }}
                navigation={navigation}
                screen='Index' 
                name="Save"/>
        </View>
    )
}

export default CreateScreen;
