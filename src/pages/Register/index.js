import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, View, TouchableNativeFeedback     } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import { TextInputMask } from 'react-native-masked-text'


export default function Welcome() {
    const navigation = useNavigation();
    const [cpf, setCpf] = useState(null);
    const [user, setUser] = useState(null);
    const [tel, setTel] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);

    //envia od dados do formulario para o backend
    async function registerUser() {
        let reqs = await fetch("http://192.168.0.117:3000"+ '/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cpfUser: cpf,
                nameUser: user,
                telUser: tel,
                emailUser: email,
                passwordUser: password

            })
        });
        let ress=await reqs.json();
        setMessage(ress);
        if(ress){
            navigation.navigate('Home');
        }
    }

    return (


        <ScrollView style={style.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
                <Text style={style.message}>Cadastre-se</Text>
            </Animatable.View>
          
      

            <Animatable.View animation="fadeInUp" style={style.containerForm}>
            <View style={style.title}>{
              message && (
                  <Text>{message}</Text>

              )
          }</View>
                <Text style={style.title}>CPF</Text>
                <TextInputMask
                    placeholder="Digite seu CPF/CNPJ..."
                    style={style.input}
                    type={'cpf'}
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                />
                <Text style={style.title}>Nome Completo</Text>
                <TextInput
                    placeholder="Digite seu nome..."
                    type={'calendarEvent'}
                    onChangeText={(text) => setUser(text)}
                    style={style.input}
                />
                <Text style={style.title}>Telefone</Text>
                <TextInputMask
                    style={style.input}
                    placeholder="Digite seu Telefone..."
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={tel}
                    onChangeText={text => setTel(text)}
                />
                <Text style={style.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    style={style.input}
                />
                <Text style={style.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    secureTextEntry={true}
                    style={style.input}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                    style={style.button}
                    onPress={registerUser}
                >
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
        backgroundColor: '#2824ba'
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
        paddingBottom: '5%',
        borderRadius: 25,


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
        borderRadius: 10,
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
        backgroundColor: '#b9113f',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

})