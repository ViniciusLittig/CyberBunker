
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Welcome from '../pages/Welcome'
import SignIn from '../pages/Signin'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile/index';
import Schedule from '../pages/Schedule';
import Heuro from '../pages/Clinics/Heuro';
import Samar from '../pages/Clinics/Samar';
import Saopaulo from '../pages/Clinics/Saopaulo';








const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Schedule'
                component={Schedule}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Heuro'
                component={Heuro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Samar'
                component={Samar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Saopaulo'
                component={Saopaulo}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}