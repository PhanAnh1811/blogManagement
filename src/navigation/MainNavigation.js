import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';
import CreateScreen  from '../screens/CreateScreen';
import EditScreen from '../screens/EditScreen';
import ShowScreen from '../screens/ShowScreen';


const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator initialRouteName="Index">
        <Stack.Screen options={{headerShown:false}} name="Index" component={IndexScreen} />
        <Stack.Screen options={{headerShown:false}} name="Create" component={CreateScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Edit" component={EditScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Show" component={ShowScreen}/>
    </Stack.Navigator>
    )
    
}

export default () => {
    return(
        <NavigationContainer>
        <MyStack />
    </NavigationContainer>
    )
    
}