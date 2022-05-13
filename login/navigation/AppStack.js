import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../../navegacao/stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AppStack;