import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (


        <ScrollView style={style.container}>
            <Animatable.View animation="fadeInLeft" delay={600} style={style.containerHeader}>
                <Text style={style.message}>Área de Agendamentos</Text>
            </Animatable.View>


            <View style={style.containerLogo} >
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo2.png')}
                    style={style.containerLogo}
                    resizeMode="contain"
                />
            </View>


            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>

                <Text style={style.title}>Escolha o consultório que deseja! </Text>
              
                

           

            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
                <View style={style.photo}>
                    <Animatable.Image 
                      animation="flipInY"
                      source={require('../../assets/doctor1.jpg')}
                      style={style.photo}
                    resizeMode="contain"
                       
                    />
               

                </View>

                <Text style={style.title}>Heuro</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('Heuro')}
                >
                    <Text style={style.buttonText}>Escolher</Text>
                </TouchableOpacity>

            </Animatable.View>
            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
            <View style={style.photo}>
                    <Animatable.Image 
                      animation="flipInY"
                      source={require('../../assets/doctor2.jpg')}
                      style={style.photo}
                    resizeMode="contain"
                       
                    />

                </View>

                <Text style={style.title}>Hospital Samar</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('Samar')}
                >
                    <Text style={style.buttonText}>Escolher</Text>
                </TouchableOpacity>


            </Animatable.View>
            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
            <View style={style.photo}>
                    <Animatable.Image 
                      animation="flipInY"
                      source={require('../../assets/doctor3.jpg')}
                      style={style.photo}
                    resizeMode="contain"
                       
                    />
               

                </View>

                <Text style={style.title}>Hospital e Maternidade São Paulo</Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate('Saopaulo')}
                >
                    <Text style={style.buttonText}>Escolher</Text>
                </TouchableOpacity>

            </Animatable.View>


            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>



            

                <TouchableOpacity
                    style={style.button1}
                    onPress={() => navigation.navigate('Schedule')}
                >
                    <Text style={style.buttonText}>Meus Agendamentos</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={style.button1}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={style.buttonText}>Perfil</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button1}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={style.buttonText}>Sair</Text>

                </TouchableOpacity>


            </Animatable.View>



        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2824ba'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '0%',
        paddingStart: '0%',
        alignItems: 'center',
    },
    message: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerLogo: {
        width: '100%',
        height: 300,
        backgroundColor: '#2824ba',
        marginBottom: 20,
    },
    //parte branca
    containerForm: {
        flex: 5,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 2,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingBottom: '5%',
        borderRadius: 10,
        marginTop: 14,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#38a69d',
        width: '120%',
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
    photo:{
        width:  500,
        height: 600,
        backgroundColor: '#FFF',
        marginBottom: 20,

     
    }

})