import React from 'react';
import { ScrollView, View , Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return (
      
            
        <ScrollView style={style.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
                <Text style={style.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={style.containerForm}>
                <Text style={style.title}>Nome Completo</Text>
                <TextInput
                    placeholder="Digite seu nome..."
                    style={style.input}
                />
                <Text style={style.title}>CPF/CNPJ</Text>
                <TextInput
                    placeholder="Digite seu CPF/CNPJ..."
                    style={style.input}
                    keyboardType="numeric"
                />
                <Text style={style.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    style={style.input}
                />
                <Text style={style.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={style.input}
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button1}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={style.buttonText}>Cancelar</Text>

                </TouchableOpacity>






            </Animatable.View>
        </ScrollView>
       
       
    );

};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingBottom: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1'
    },
    button1: {
        backgroundColor: 'red',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

})