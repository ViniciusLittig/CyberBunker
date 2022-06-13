import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    Platform
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        setDate(selectedDate);
    };
    const showDatepicker = () => {
        setShow('true');

    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    const showTimepicker = () => {
        showMode('time');
      };


    return (
        <View style={styles.container}>





            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Hospital e Maternidade São Paulo</Text>
                <Text style={styles.text}></Text>

                <Animatable.Image
                        animation="flipInY"
                        source={require('../../../assets/saopaulo.jpg')}
                        style={styles.containerLogo}
                        resizeMode="contain"
                    />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText} >Agendar</Text>
                </TouchableOpacity>


                <View>
                <Button onPress={showDatepicker} title="Escolha o Dia!" />
            </View>
            <View>
        <Button onPress={showTimepicker} title="Escolha da Data!" />
      </View>

            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}

            </Animatable.View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#2824ba'
    },
 
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 25,
        paddingStart: '10%',
        paddingEnd: '10%'
    },
    containerLogo: {
        width: '100%',
        height: 300,
        backgroundColor: '#2824ba',
        marginBottom: 20,
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
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})