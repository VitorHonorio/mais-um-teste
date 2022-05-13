import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';


import SignupScreen from '../../views/SignupScreen';
import LoginScreen from '../../views/LoginScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    }, [])

    if (isFirstLaunch === null) {
        return null;
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>

            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};


export default AuthStack;