import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { TextInputMask } from 'react-native-masked-text'



export default function SignIn () {
    const navigation = useNavigation()

    const [user,setUser]=useState(null);
    const [cpf, setCpf] = useState(null)
    const [password,setPassword]=useState(null);
    const [message,setMessage]=useState(null);


    //Fazer Login
    async function doLogin()
    {
        let reqs = await fetch("http://192.168.0.117:80/"+'Controller.php',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                cpfUser: cpf,
                passwordUser: password
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
        if(ress){
            navigation.navigate('Home');
        }else{
            setMessage('Usuário ou senha inválidos')
            setTimeout(()=>{
                setMessage(null);
            },3000);
        }
    }

    return (
        <View style={style.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
                <Text style={style.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={style.containerForm}>
                    {message &&(
                        <Text style={style.messageNeg}>{message}</Text>
                    )}
                <Text style={style.title}>CPF</Text>
                <TextInputMask
                    placeholder="Digite seu CPF/CNPJ..."
                    style={style.input}
                    type={'cpf'}
                    value={cpf}
                    onChangeText={(text)=>setCpf(text)}
                />

                <Text style={style.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    style={style.input}
                    secureTextEntry={true}
                    onChangeText={(text)=>setPassword(text)}
                />

                <TouchableOpacity 
                    style={style.button}
                    onPress={doLogin}
                >
                    <Text style={style.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.buttonRegister}
                onPress= { () => navigation.navigate('Register')}
                >
                    <Text style={style.registerText}>Não possui conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
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
        backgroundColor: '#2824ba',
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
    messageNeg: {
        color: 'red',
        marginTop: '2%',
    }
})