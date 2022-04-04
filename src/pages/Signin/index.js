import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'



export default function SignIn () {
    const navigation = useNavigation()

    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [erroEmail, setErroEmail] = useState(null)
    const [erroSenha, setErroSenha] = useState(null)

    const validar = () => {
        setErroEmail("Preencha seu email corretamente")
        return false
    }
    const salvar = () => {
        if (validar()) {
        console.log('Salvouuu...')
        }
    }



    return (
        <View style={style.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={style.containerHeader}>
                <Text style={style.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={style.containerForm}>
                <Text style={style.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    onChangeText={value => setEmail(value)}
                    style={style.input}
                    erroMessage={erroEmail}
                />
                <Text style={style.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    onChangeText={value => setSenha(value)}
                    style={style.input}
                    erroMessage={erroSenha}
                />

                <TouchableOpacity 
                    style={style.button}
                    onPress={() => navigation.navigate('Home')}
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
    }
})