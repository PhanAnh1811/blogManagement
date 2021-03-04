import React,{useContext,useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import BlogContext from '../context/BlogContext'

const EditScreen = ({ navigation,route }) => {

    const data = route.params;


    const [newTitle,setNewTitle]  = useState(data !== null ? data.title : '');
    const [newContent,setNewContent] = useState(data !== null ? data.content : '');



    const blogCnt=useContext(BlogContext);



    return (
        <View>
            <Header navigation={navigation} screen='Index' iconName='close'/>
            <Wrapper
                captionTitle='Enter new title'  
                captionContent='Enter new content'
                title={newTitle}
                setTitle={setNewTitle}
                content={newContent}
                setContent={setNewContent}
                name='Edit'
                callback={() => {

                }}
            
            />
        </View>
    )
}

export default EditScreen