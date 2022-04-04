import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (


        <View style={styles.container}>
 <Animatable.View animation="fadeInLeft" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Área de Agendamentos</Text>
            </Animatable.View>
           

            <View style={styles.containerLogo} >
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo2.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>
            

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Escolha o consultorio!</Text>
                <Text style={styles.text}></Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText} >Anga</Text>
                </TouchableOpacity>

             
            </Animatable.View>
            


        </View>
    );
}

const styles = StyleSheet.create({
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
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerLogo: {
        flex: 1.5,
        backgroundColor: '#2824ba',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 2,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        paddingStart: '5%',
        paddingEnd: '5%'
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
    button: {
        position: 'absolute',
        backgroundColor: '#2824ba',
        borderRadius: 50,
        paddingVertical: 20,
        width: '100%',
        alignSelf: 'center',
        bottom: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold'
    },

    button2: {
        position: 'absolute',
        backgroundColor: '#2824ba',
        borderRadius: 50,
        paddingVertical: 20,
        width: '100%',
        alignSelf: 'center',
        bottom: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button3: {
        position: 'absolute',
        backgroundColor: '#2824ba',
        borderRadius: 50,
        paddingVertical: 30,
        width: '100%',
        alignSelf: 'center',
        bottom: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },

})