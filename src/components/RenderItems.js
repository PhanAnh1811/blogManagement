import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
    {
        id: 1,
        name: "item 1"
    },
    {
        id: 2,
        name: "item 2"
    },
    {
        id: 3,
        name: "item 3"
    },
]

const RenderItems = ({ navigation }) => {
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                keyExtractor={e => e.id.toString()}
                renderItem={({ item }) => {
                    return (

                        <View style={Styles.wrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Show')}>
                                <Text style={Styles.txt}>Blog Title</Text>
                            </TouchableOpacity>

                            <View></View>

                            <TouchableOpacity onPress={() => console.log('Remove')}>
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
