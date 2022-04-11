
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
import Consu_Santa_Clara from '../pages/Clinics/Consu_Santa_Clara';
import Consu_Dr_Claudemir from '../pages/Clinics/Consu_Dr_Claudemir';
import Consu_Dr_Estaquio from '../pages/Clinics/Consu_Dr_Estaquio';






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
                name='Consu_Santa_Clara'
                component={Consu_Santa_Clara}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Consu_Dr_Claudemir'
                component={Consu_Dr_Claudemir}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Consu_Dr_Estaquio'
                component={Consu_Dr_Estaquio}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}