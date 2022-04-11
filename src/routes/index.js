
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Welcome from '../pages/Welcome'
import SignIn from '../pages/Signin'
import Register from '../pages/Register'
import Home from '../pages/Home'
import PessoaFisica from '../pages/Register/PessoaFisica';
import PessoaJuridica from '../pages/Register/PessoaJuridica';
import Profile from '../pages/Profile/index';
import Schedule from '../pages/Schedule';
import Clinics from '../pages/Clinics/Consultório Santa Clara';






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
                name='RegisterFisica'
                component={PessoaFisica}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='RegisterJuridica'
                component={PessoaJuridica}
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
                name='Clinics'
                component={Clinics}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}