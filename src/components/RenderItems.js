import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BlogContext from '../context/BlogContext';


const RenderItems = ({ navigation }) => {
    const dataFromBlogContext = useContext(BlogContext);
    const {removeBlogPost} = dataFromBlogContext;
    
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dataFromBlogContext.data}
                keyExtractor={e => e.id.toString()}
                renderItem={({ item,index }) => {
                    return (
                        <View style={Styles.wrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Show',{item})}>
                                <Text style={Styles.txt}>{item.title}</Text>
                            </TouchableOpacity>

                           

                            <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                                <AntDesign name="delete"
                                    size={30}
                                    style={Styles.icons}
                                />                                      
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default RenderItems;

const Styles = StyleSheet.create({
    icons: {
        alignSelf: "flex-end",
    },
    wrapper: {
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: "space-around"
    },
    txt: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
