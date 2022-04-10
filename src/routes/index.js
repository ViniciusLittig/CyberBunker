
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Welcome from '../pages/Welcome'
import SignIn from '../pages/Signin'
import Register from '../pages/Register'
import Home from '../pages/Home'
import PessoaFisica from '../pages/Register/PessoaFisica';
import PessoaJuridica from '../pages/Register/PessoaJuridica';






const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name='Register'
                component={Register}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name='RegisterFisica'
                component={PessoaFisica}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name='RegisterJuridica'
                component={PessoaJuridica}
                options={{ headerShown: false}}
            />

<Stack.Screen 
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}